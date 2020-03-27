import {createPatchFunction} from './src/vdom/patch'
import * as nodeOps from './node-ops'

export const patch = createPatchFunction({nodeOps})