const t = require('babel-types');
const _ = require('lodash');

const lcfirst = s => s[0].toLowerCase() + s.slice(1);

const modelVar = name =>
  t.memberExpression(
    t.identifier('schema'),
    t.stringLiteral(lcfirst(name)),
    true,
  );

/**
 * ast builder for /describe/ endpoint
 */
class NormalizrAst {
  constructor(descriptions) {
    this.descriptions = descriptions;
  }

  ast() {
    return t.program(this.body());
  }

  body() {
    return [...this.requires(), ...this.schema()];
  }

  requires() {
    return [
      t.importDeclaration(
        [t.importSpecifier(t.identifier('normalizr'), t.identifier('schema'))],
        t.stringLiteral('normalizr'),
      ),
    ];
  }

  schema() {
    return [
      t.exportNamedDeclaration(this.schemaDeclaration(), [
        t.exportSpecifier(t.identifier('schema'), t.identifier('schema')),
      ]),
      ...this.defineAssocs(),
    ];
  }

  schemaDeclaration() {
    return t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier('schema'),
        t.objectExpression(
          Object.entries(this.descriptions).map(([name, description]) => {
            return t.objectProperty(
              t.stringLiteral(lcfirst(name)),
              this.entityDefinition({ description }),
            );
          }),
        ),
      ),
    ]);
  }

  entityDefinition({ description }) {
    return t.newExpression(
      t.memberExpression(t.identifier('normalizr'), t.identifier('Entity')),
      [
        t.stringLiteral(description.asCollection),
        t.objectExpression([]),
        t.objectExpression([
          t.objectProperty(t.identifier('idAttribute'), t.stringLiteral('row')),
        ]),
      ],
    );
  }

  defineAssocs() {
    return Object.entries(this.descriptions).map(([name, description]) => {
      return t.expressionStatement(
        t.callExpression(
          t.memberExpression(modelVar(name), t.identifier('define')),
          [
            t.objectExpression([
              ...Object.entries(
                description.belongsTo,
              ).map(([attribute, options]) => {
                return t.objectProperty(
                  t.stringLiteral(attribute),
                  modelVar(options.target_name),
                );
              }),
              ...Object.entries(
                description.belongsToMany,
              ).map(([attribute, options]) => {
                return t.objectProperty(
                  t.stringLiteral(attribute),
                  t.arrayExpression([modelVar(options.target_name)]),
                );
              }),
            ]),
          ],
        ),
      );
    });
  }
}

module.exports = NormalizrAst;
