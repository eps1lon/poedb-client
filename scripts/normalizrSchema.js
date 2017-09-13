const generate = require('babel-core').transformFromAst;
const fs = require('fs');
const path = require('path');
const request = require('request');

const Schema = require('../src/schema/NormalizrAst');

const throwOnError = cb => (error, ...args) => {
  if (error) {
    throw error;
  } else if (cb && typeof cb === 'function') {
    cb(...args);
  }
};

const writeAst = async schema => {
  const ast = schema.ast();

  try {
    fs.writeFile(
      path.join(__dirname, '../src/schema/', 'generated.js'),
      generate(ast).code,
      throwOnError(),
    );
  } catch (e) {
    fs.writeFile('./.debug.json', JSON.stringify(ast, null, 2), throwOnError());
  }
};

request(
  {
    uri: 'http://localhost:3000/describe/',
    method: 'GET',
    json: true,
    headers: {
      authorization: 'allowme', // poedb access key
    },
  },
  async (error, response, body) => {
    const schema = new Schema(body);

    await writeAst(schema);

    console.log('done');
  },
);
