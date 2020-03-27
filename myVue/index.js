import Vue from './src/runtime/index'
import {query} from './util/index'
import  {mountComponent} from './src/instance/lifecycle'
import {patch} from './patch'
Vue.prototype.$mount = function(el) {
  el = el ? query(el) : undefined

  return mountComponent(this, el)
}

Vue.prototype.__patch__ = patch

export default Vue