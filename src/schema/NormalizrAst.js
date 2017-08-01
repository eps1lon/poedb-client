const t = require('babel-types');
const _ = require('lodash');

const modelVar = name => t.identifier(name);

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
      ...this.schemaDeclarations().map(declaration => {
        return t.exportNamedDeclaration(declaration, []);
      }),
      ...this.defineAssocs(),
    ];
  }

  schemaDeclarations() {
    return Object.entries(this.descriptions).map(([name, description]) => {
      return t.variableDeclaration('const', [
        t.variableDeclarator(
          modelVar(name),
          this.entityDefinition({ description }),
        ),
      ]);
    });
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
