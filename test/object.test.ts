import { expect, test } from 'vitest';
import { deepMerge, isObject, mergeArrayWithDedupe } from '../package/object';

const testObj1 = {
  a: 1,
  b: [1, 2, 3, 4, { a: 1, s: [32] }],
  c: {
    start: { a: 1 },
  },
};
const testObj2 = {
  b: [1, 5, 6, 8, 7, 4, { a: 1, s: [11] }],
  c: { start: [1, 2] },
};
const result = {
  a: 1,
  b: [
    1,
    2,
    3,
    4,
    {
      a: 1,
      s: [32],
    },
    5,
    6,
    8,
    7,
    {
      a: 1,
      s: [11],
    },
  ],
  c: {
    start: [1, 2],
  },
};

test('deepMerge', () => {
  expect(deepMerge(testObj1, testObj2)).toEqual(result);
});

test('isObject', () => {
  expect(isObject(testObj1)).toBeTruthy();
  expect(isObject(1)).toBeFalsy();
});

test('mergeArrayWithDedupe', () => {
  expect(mergeArrayWithDedupe([1, 1], [2, 2])).toEqual([1, 2]);
});
