import {isPlainObject, noop} from '../../util/index'
import {observe} from '../observer/index'
export function initState(vm) {
  vm._watchers = []
  
  const opts = vm.$options

  if (opts.data) {
    initDate(vm)
  }
}

function initDate(vm) {
  let data = vm.$options.data
  data = vm._data = (typeof data === 'function') ? getData(data, vm) : data || {}
  
  if (!isPlainObject(data)) {
    data = {}
  }

  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    proxy(vm, `_data`, key)
  }
  observe(data, true)
}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

function getData(data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    console.error(e, vm, `data()`)
    return {}
  } finally {
  }
}