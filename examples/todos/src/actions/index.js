let nextTodoId = 1
let nrOfCars = 3




export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const addCar = text => ({
  type: 'ADD_CAR',
  id: nrOfCars++,
  text
})

export const removeCar = text => ({
  type: 'REMOVE_CAR',
  id: nrOfCars--,
  text: ''
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const toggleCar = id => ({
  type: 'TOGGLE_CARS',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
