export const ADD_ISSUE = 'ADD_ISSUE'
export const REMOVE_ISSUE = 'REMOVE_ISSUE'
export const UPDATE_ISSUE = 'UPDATE_ISSUE'

export const ADD_PRIORITY = 'ADD_PRIORITY'

export const addIssue = (title, description) => ({
  type: ADD_ISSUE,
  payload: {
    id: null,
    title,
    description
  }
})

export const updateIssue = (id, title, description) => ({
  type: ADD_ISSUE,
  payload: {
    id,
    title,
    description
  }
})

export const removeIssue = (id) => ({
  type: REMOVE_ISSUE,
  payload: {
    id
  }
})

export const addPriority = (issueId, priority) => ({
  type: ADD_PRIORITY,
  payload: {
    issueId,
    priority
  }
})
