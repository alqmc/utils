export const isObject = (val: any) => val && typeof val === 'object';
export const mergeArrayWithDedupe = (a: any[], b: any[]) =>
  Array.from(new Set([...a, ...b]));

/**
 *
 * @param target
 * @param source
 * @returns
 */
export const deepMerge = (
  target: Record<string, any>,
  source: Record<string, any>
) => {
  for (const key of Object.keys(source)) {
    const oldVal = target[key];
    const newVal = source[key];

    if (Array.isArray(oldVal) && Array.isArray(newVal)) {
      target[key] = mergeArrayWithDedupe(oldVal, newVal);
    } else if (isObject(oldVal) && isObject(newVal)) {
      target[key] = deepMerge(oldVal, newVal);
    } else {
      target[key] = newVal;
    }
  }

  return target;
};

export default deepMerge;
