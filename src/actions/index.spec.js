import {
  ADD_ISSUE,
  UPDATE_ISSUE,
  REMOVE_ISSUE,
  ADD_PRIORITY,
  addIssue,
  updateIssue,
  removeIssue,
  addPriority
} from './'

test('addIssue produces correct action', () => {
  const title = 'foo'
  const description = 'bar'
  const expected = {
    type: ADD_ISSUE,
    payload: {
      id: null,
      title,
      description,
      createdAt: null,
      updatedAt: null
    }
  }
  const actual = addIssue(title, description)

  expect(actual).toEqual(expected)
})

test('updateIssue produces correct action', () => {
  const id = 'foo'
  const title = 'bar'
  const description = 'baz'
  const expected = {
    type: UPDATE_ISSUE,
    payload: {
      id,
      title,
      description,
      updatedAt: null
    }
  }
  const actual = updateIssue(id, title, description)

  expect(actual).toEqual(expected)
})

test('removeIssue produces correct action', () => {
  const id = 'foo'
  const expected = {
    type: REMOVE_ISSUE,
    payload: {
      id
    }
  }
  const actual = removeIssue(id)

  expect(actual).toEqual(expected)
})

test('addPriority produces correct action', () => {
  const issueId = 'issue-id'
  const priority = 3

  const expected = {
    type: ADD_PRIORITY,
    payload: {
      issueId,
      priority,
      updatedAt: null
    }
  }
  const actual = addPriority(issueId, priority)

  expect(actual).toEqual(expected)
})
