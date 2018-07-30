import { combineReducers } from 'redux'
import todos from './todos'
import cars from './cars'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  cars
})
