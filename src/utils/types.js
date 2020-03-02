/*
 * @Author: your name
 * @Date: 2020-03-02 17:43:40
 * @LastEditTime: 2020-03-02 17:46:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\utils\types.js
 */
export function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export const isFunction = functionToCheck => {
  var getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === "[object Function]"
  );
};

export const isUndefined = val => {
  return val === void 0;
};

export const isDefined = val => {
  return val !== undefined && val !== null;
};
