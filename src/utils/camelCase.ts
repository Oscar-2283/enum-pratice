import _ from 'lodash'

export function deepCamelCaseKeys<T>(obj: T): any {
  if (_.isArray(obj)) {
    return obj.map(deepCamelCaseKeys);
  } else if (_.isObject(obj)) {
    return _.mapValues(
      _.mapKeys(obj, (value, key) => _.camelCase(key)),
      deepCamelCaseKeys
    );
  } else {
    return obj;
  }
}
