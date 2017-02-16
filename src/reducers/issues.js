import {
  ADD_ISSUE,
  UPDATE_ISSUE,
  REMOVE_ISSUE
} from '../actions'

function issues (state = {}, action) {
  switch (action.type) {
    case ADD_ISSUE:
    case UPDATE_ISSUE:
      return {
        ...state,
        ...{ issues: { ...state.issues, ...{ [action.payload.id]: action.payload } } }
      }
    case REMOVE_ISSUE:
      const issues = state.issues
      delete issues[action.payload.id]
      return {
        ...state,
        ...{ issues }
      }
    default:
      return state
  }
}

export default issues
