import {
  ADD_ISSUE,
  UPDATE_ISSUE,
  REMOVE_ISSUE
} from '../actions'

function issues (state = {}, action) {
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        ...{ [action.payload.id]: { ...action.payload, author: action.user } }
      }
    case UPDATE_ISSUE:
      return action.user === state[action.payload.id].author
        ? {
          ...state,
          ...{ [action.payload.id]: {
            ...state[action.payload.id],
            ...action.payload
          } }
        }
        : state
    case REMOVE_ISSUE:
      const newState = { ...state }
      delete newState[action.payload.id]
      return action.user === state[action.payload.id].author
        ? newState
        : state
    default:
      return state
  }
}

export default issues
