type dataType =
  | 'boolean'
  | 'number'
  | 'string'
  | 'function'
  | 'array'
  | 'date'
  | 'regExp'
  | 'object'
  | 'null'
  | 'undefined';
export const typeOf = (obj: any): dataType => {
  const { toString } = Object.prototype;
  const map: { [key: string]: dataType } = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  return map[toString.call(obj)];
};

export const isObject = (val: any) => val && typeOf(val) === 'object';
export const isArray = (val: any) => val && Array.isArray(val);
export const isReferenceType = (val: any) => isObject(val) || isArray(val);

export const mergeArrayWithDedupe = (a: any[], b: any[]) =>
  Array.from(new Set([...a, ...b]));

export const deepMerge = (
  target: Record<string, any>,
  source: Record<string, any>
) => {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      target[key] =
        target[key] && isReferenceType(target[key])
          ? deepMerge(target[key], source[key])
          : source[key];
    }
  } else if (Array.isArray(target) && Array.isArray(source)) {
    target = mergeArrayWithDedupe(target, source);
  } else {
    target = source;
  }
  return target;
};

export default deepMerge;
