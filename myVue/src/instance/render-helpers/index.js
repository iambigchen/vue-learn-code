import { toNumber, toString } from '../../../util/index'
import { createTextVNode, createEmptyVNode } from '../../vdom/vnode'

export function installRenderHelpers (target) {
  target._n = toNumber
  target._s = toString
  target._v = createTextVNode
  target._e = createEmptyVNode
}
