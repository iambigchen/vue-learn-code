import { createElement } from '../vdom/create-element'
import {installRenderHelpers} from './render-helpers/index'
export function initRender(vm) {
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}

export function renderMixin(Vue) {
  installRenderHelpers(Vue.prototype)
  Vue.prototype._render = function() {
    const vm = this
    const { render, _parentVnode } = vm.$options

    vm.$vnode = _parentVnode

    let vnode
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement)
    } catch (error) {
      console.error('render error', error)
    }

    vnode.parent = _parentVnode

    return vnode
  }
}