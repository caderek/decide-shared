import createReducer from '../createReducer'
import {
  ADD_ISSUE,
  UPDATE_ISSUE,
  REMOVE_ISSUE
} from '../actions'

export const cases = {
  [ADD_ISSUE] (state, payload, user) {
    return {
      ...state,
      ...{ [payload.id]: { ...payload, author: user } }
    }
  },

  [UPDATE_ISSUE] (state, payload, user) {
    return user === state[payload.id].author
      ? {
        ...state,
        ...{ [payload.id]: {
          ...state[payload.id],
          ...payload
        } }
      }
      : state
  },

  [REMOVE_ISSUE] (state, payload, user) {
    const newState = { ...state }
    delete newState[payload.id]

    return user === state[payload.id].author
      ? newState
      : state
  }
}

export default createReducer(cases)
