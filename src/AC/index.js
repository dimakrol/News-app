import {DELETE_ARTICLE, INCREMENT, CHANGE_SELECTION, CHANGE_DATE} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function changeDate(from, to) {
  return {
    type: CHANGE_DATE,
    payload: { from: from, to: to }
  }
}