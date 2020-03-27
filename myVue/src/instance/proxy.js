const hasProxy = typeof Proxy !== 'undefined'

const gethandles = {
  get(target, key) {
    if (typeof key === 'string' && !(key in target)) {
      console.warn(target, key)
    }
    return target[key] 
  }
}

export function initProxy(vm) {
  if (hasProxy) {
    vm._renderProxy = new Proxy(vm, gethandles)
  } else {
    vm._renderProxy = vm
  }
}