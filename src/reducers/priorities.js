import createReducer from '../createReducer'
import { ADD_PRIORITY } from '../actions'

export const cases = {
  [ADD_PRIORITY] (state, payload, user) {
    const id = `${payload.issueId}.${user}`

    return {
      ...state,
      ...{ [id]: { ...payload, author: user } }
    }
  }
}

export default createReducer(cases)
