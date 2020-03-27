import {initMixin} from './init'
import {renderMixin} from './render'
import {liftcycleMixin} from './lifecycle'


function Vue(options) {
  if (!(this instanceof Vue)) {
    console.warn('Vue is a constructor and should be called with the `new` keyword')
  }

  this._init(options)
}

initMixin(Vue)
renderMixin(Vue)
liftcycleMixin(Vue)
export default Vue