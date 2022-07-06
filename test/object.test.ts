import { expect, test } from 'vitest';
import { deepMerge } from '../package/object';

const testObj1 = {
  a: 1,
  b: [1, 2, 3, 4],
  c: {
    start: { a: 1 },
  },
};
const testObj2 = {
  b: [1, 5, 6, 8, 7, 4],
  c: { start: [1, 2] },
};
const result = {
  a: 1,
  b: [1, 2, 3, 4, 5, 6, 8, 7],
  c: {
    start: {
      '0': 1,
      '1': 2,
      a: 1,
    },
  },
};

test('deepMerge', () => {
  expect(deepMerge(testObj1, testObj2)).toEqual(result);
});
