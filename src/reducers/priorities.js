import { ADD_PRIORITY } from '../actions'

function priorities (state = {}, action) {
  switch (action.type) {
    case ADD_PRIORITY:
      const id = `${action.payload.issueId}.${action.user}`
      return {
        ...state,
        ...{ [id]: { ...action.payload, author: action.user } }
      }
    default:
      return state
  }
}

export default priorities
