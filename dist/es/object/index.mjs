const isObject = (val) => val && typeof val === "object";
const mergeArrayWithDedupe = (a, b) => Array.from(/* @__PURE__ */ new Set([...a, ...b]));
const deepMerge = (target, source) => {
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

export { deepMerge, deepMerge as default, isObject, mergeArrayWithDedupe };
