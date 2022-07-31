import capitalize from '../src/capitalize.js';

import { strict as assert } from 'assert';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');
console.log('Все тесты пройдены!');