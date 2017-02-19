import * as actions from './actions'
import issues from './reducers/issues'
import priorities from './reducers/priorities'

const reducers = {
  issues,
  priorities
}

export {
  actions,
  reducers
}
