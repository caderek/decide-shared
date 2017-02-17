import {
  ADD_ISSUE,
  UPDATE_ISSUE,
  REMOVE_ISSUE,
  addIssue,
  updateIssue,
  removeIssue
} from './'

test('addIssue produces correct action', () => {
  const title = 'foo'
  const description = 'bar'
  const expected = {
    type: ADD_ISSUE,
    payload: {
      id: null,
      title,
      description
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
      description
    }
  }
  const actual = updateIssue(title, description)

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
