import strats from './basic'
import {isReservedTag} from './element'
export function mergeOptions (parent, child, vm) {
  const options = {}
  let key 
  for (key in parent) {
    mergeField(key)
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

const defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}

const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = function (obj, key) {
  return hasOwnProperty.call(obj, key)
}


export function query(el) {
  if (typeof el === 'string') {
    const selected = document.querySelector(el)
    if (!selected) {
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

export function isPrimitive(value) {
  return (typeof value === 'string' || typeof value === 'boolean' ||  typeof value === 'number' ||
  typeof value === 'symbol')
}

export function makeMap (
  str,
  expectsLowerCase
) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

export function noop () {}

export function isUndef (v) {
  return v === undefined || v === null
}

export function isDef (v) {
  return v !== undefined && v !== null
}

export function isTrue (v) {
  return v === true
}

export function isFalse (v) {
  return v === false
}

const _toString = Object.prototype.toString

export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isObject(obj) {
  return  obj !== null && typeof obj === 'object'
}

export function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    console.warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    )
  }
  if (isBuiltInTag(name) || isReservedTag(name)) {
    console.warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    )
  }
}

export const isBuiltInTag = makeMap('slot,component', true)

export function extend (to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

export function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

export function toNumber (val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

export function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}