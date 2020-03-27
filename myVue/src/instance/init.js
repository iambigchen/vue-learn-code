import {mergeOptions} from '../../util/index'
import {callHook} from './lifecycle'
import {initProxy} from './proxy'
import {initRender} from './render'
import {initState} from './state'
let uid = 0

export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this
    vm._uid = uid++
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options, vm)
    }

    initProxy(vm)

    vm._self = vm
    console.log('vm', vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')

    initState(vm)

    callHook(vm, 'created')

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}

export function resolveConstructorOptions(Ctor) {
  let options = Ctor.options
  return options
}

export function initInternalComponent(vm, options) {
  const opts = vm.$options = Object.create(vm.constructor.options)
  // doing this because it's faster than dynamic enumeration.
  const parentVnode = options._parentVnode
  opts.parent = options.parent
  opts._parentVnode = parentVnode

  const vnodeComponentOptions = parentVnode.componentOptions
  opts.propsData = vnodeComponentOptions.propsData
  opts._parentListeners = vnodeComponentOptions.listeners
  opts._renderChildren = vnodeComponentOptions.children
  opts._componentTag = vnodeComponentOptions.tag

  if (options.render) {
    opts.render = options.render
    opts.staticRenderFns = options.staticRenderFns
  }
}