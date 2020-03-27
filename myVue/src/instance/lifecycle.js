import {Watcher} from '../observer/watch'
import {noop} from '../../util/index'

export let activeInstance = null

export function mountComponent(vm, el, hydrating) {
  vm.$el = el

  if (!vm.$options.render) {

  } else {
    callHook(vm, 'beforeMount')

    var updateComponent

    updateComponent = function() {
      vm._update(vm._render(), hydrating)
    }
  }

  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true)

  hydrating= false

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

export function liftcycleMixin(Vue) {
  Vue.prototype._update = function(vnode, hydrating) {
    const vm = this
    const prevEl = vm.$el
    const prevVnode = vm._vnode
    const prevActiveInstance = activeInstance
    activeInstance = vm

    vm._vnode = vnode

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
  }
}

export function callHook(vm, hook) {
  const handlers = vm.$options[hook]
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm)
      } catch (e) {
        console.error(e, vm, `${hook} hook`)
      }
    }
  }
}