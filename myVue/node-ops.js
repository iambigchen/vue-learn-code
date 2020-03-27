export function tagName(node) {
  return node.tagName
}

export function parentNode (node) {
  return node.parentNode
}

export function nextSibling(node) {
  return node.nextSibling
}

export function createElement(tag, vnode) {
  const elm = document.createElement(tag)
  if (tag !== 'select') {
    return elm
  }

  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple')
  }
  return elm
}
export function setTextContent (node, text) {
  node.textContent = text
}
export function createTextNode (text) {
  return document.createTextNode(text)
}

export function appendChild(node, child) {
  node.appendChild(child)
}

export function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode)
}

export function createComment(text) {
  return document.createComment(text)
}

export function removeChild(node, child) {
  node.removeChild(child)
}