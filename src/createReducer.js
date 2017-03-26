const createReducer = (cases, initialState = {}) => (state = initialState, action) =>
  cases[action.type]
    ? cases[action.type](state, action.payload, action.user)
    : state

export default createReducer
