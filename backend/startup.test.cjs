const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

function startup(env, dotenvValues = {}) {
  const calls = { errors: [], routes: 0, port: undefined, database: undefined };
  const app = { use() {}, listen(port) { calls.port = port; } };
  const express = Object.assign(() => app, { json: () => () => {} });
  const stopped = new Error('startup stopped');
  try {
    vm.runInNewContext(source, {
      process: { env, exit(code) { calls.exitCode = code; throw stopped; } },
      console: { error(message) { calls.errors.push(message); }, log() {} },
      require(name) {
        if (name === 'dotenv') return { config() { Object.assign(env, dotenvValues); } };
        if (name === 'express') return express;
        if (name === 'cors') return () => () => {};
        if (name === 'mongoose') return { async connect(value) { calls.database = value; } };
        calls.routes++;
        return {};
      }
    });
  } catch (error) {
    if (error !== stopped) throw error;
  }
  return calls;
}

for (const missing of ['JWT_SECRET_KEY', 'DB_URL']) {
  for (const value of [undefined, '', '   ']) {
    test(`startup rejects missing or blank ${missing}: ${JSON.stringify(value)}`, () => {
      const env = { DB_URL: 'test-database-sentinel', JWT_SECRET_KEY: 'test-secret-sentinel' };
      env[missing] = value;
      const result = startup(env);
      assert.equal(result.exitCode, 1);
      assert.deepEqual(result.errors, [`Missing required environment variables: ${missing}`]);
      assert.equal(result.routes, 0);
      assert.equal(result.port, undefined);
      assert.equal(result.database, undefined);
    });
  }
}

test('startup reports both missing variable names', () => {
  assert.deepEqual(startup({}).errors, ['Missing required environment variables: DB_URL, JWT_SECRET_KEY']);
});

test('dotenv loads before validation and port selection', () => {
  const result = startup({}, { DB_URL: 'test-database-sentinel', JWT_SECRET_KEY: 'test-secret-sentinel', PORT: '5000' });
  assert.deepEqual(result.errors, []);
  assert.equal(result.exitCode, undefined);
  assert.equal(result.port, '5000');
  assert.equal(result.database, 'test-database-sentinel');
  assert.equal(result.routes, 4);
});

test('PORT remains optional', () => {
  assert.equal(startup({ DB_URL: 'test-database-sentinel', JWT_SECRET_KEY: 'test-secret-sentinel' }).port, 4000);
});
