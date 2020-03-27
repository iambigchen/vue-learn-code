import {initExtend} from './extend'
import {ASSET_TYPES} from '../../util/constants'
export function initGlobalAPI(Vue) {
  Vue.options = Object.create(null)
  Vue.options._base = Vue
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })
  initExtend(Vue)
}