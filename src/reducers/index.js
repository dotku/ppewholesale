import { combineReducers } from 'redux'
import todos from './todos'
import sources from './sources'

export default combineReducers({
  todos,
  sources
})