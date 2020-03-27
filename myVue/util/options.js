import {hasOwn} from './index'

export function resolveAsset (options, type, id) {
  if (typeof id !== 'string') {
    return
  }

  const assets = options[type]

  if (hasOwn(assets, id)) return assets[id]
}