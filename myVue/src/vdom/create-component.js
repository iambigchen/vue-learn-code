import {isUndef, isObject} from '../../util/index'
import {VNode} from '../vdom/vnode'
import {activeInstance, callHook} from '../instance/lifecycle'

export function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return
  }
  const baseCtor = context.$options._base
  let asyncFactory
  data = data || {}
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor)
  }

  if (isUndef(Ctor.cid)) {

  }
  
  var propsData

  var listeners

  installComponentHooks(data)

  const name = Ctor.options.name || tag
  
  const vnode = new VNode(`vue-component-${Ctor.cid}${name ? `-${name}` : ''}`, data, undefined, undefined, undefined, context,
  { Ctor, propsData, listeners, tag, children },asyncFactory
  )

  return vnode
}

export function createComponentInstanceForVnode(vnode, parent) {
  const options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent
  }
  return new vnode.componentOptions.Ctor(options)
}

const componentVNodeHooks = {
  init(vnode, hydrating) {
    const child = vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance
    )
    child.$mount(vnode.elm, hydrating)
  },
  insert(vnode) {
    const { componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
  },
  destroy (vnode) {
    const { componentInstance } = vnode
    if (!componentInstance._isDestroyed) {
      componentInstance.$destroy()
    }
  }
}

const hooksToMerge = Object.keys(componentVNodeHooks)

function installComponentHooks(data) {
  const hooks = data.hook || (data.hook = {})
  for (let index = 0; index < hooksToMerge.length; index++) {
    const key = hooksToMerge[index];
    const existing = hooks[key]
    const toMerge = componentVNodeHooks[key]
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge
    }
  }
}

function mergeHook (f1, f2) {
  const merged = (a, b) => {
    // flow complains about extra args which is why we use any
    f1(a, b)
    f2(a, b)
  }
  merged._merged = true
  return merged
}
