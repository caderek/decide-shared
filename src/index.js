import * as actions from './actions'
import issues from './reducers/issues'
import priorities from './reducers/priorities'
import createReducer from './createReducer'

const reducers = {
  issues,
  priorities
}

export {
  actions,
  reducers,
  createReducer
}
