import {isPrimitive, isDef} from '../../util/index'
import {resolveAsset} from '../../util/options'
import {isReservedTag} from '../../util/element'
import {createEmptyVNode, VNode} from './vnode'
import {normalizeChildren, simpleNormalizeChildren} from './helpers/normalize-children'
import {createComponent} from './create-component'

const SIMPLE_NORMALIZE = 1
const ALWAYS_NORMALIZE = 2

export function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children
    children = data
    data = undefined
  }

  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement(context, tag, data, children, normalizationType) {
  if (!tag) {
    return createEmptyVNode()
  }
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {}
    data.scopedSlots = { default: children[0] }
    children.length = 0
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children)
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children)
  }

  let vnode
  if (typeof tag === 'string') {
    let Ctor
    if (isReservedTag(tag)) {
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    } else if(isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      vnode = createComponent(Ctor, data, context, children, tag)
    }
  } else {
    vnode = createComponent(tag, data, context, children)
  }

  if (vnode) {
    return vnode
  } else {
    return createEmptyVNode()
  }

}