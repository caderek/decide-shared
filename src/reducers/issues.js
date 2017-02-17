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
        ...{ [action.payload.id]: action.payload }
      }
    case REMOVE_ISSUE:
      const newState = { ...state }
      delete newState[action.payload.id]
      return newState
    default:
      return state
  }
}

export default issues
