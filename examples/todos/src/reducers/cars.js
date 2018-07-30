// const initialState = [
//     {id: 0, text: 'BMW'},
//     {id: 1, text: 'Volvo'},
//     {id: 2, text: 'Jaguar'}
//   ]
  
const initialState = {
    cars : [
        {id: "0",text: "BMW"},
        {id: "1",text: "Volvo"},
        {id: "2",text: "Mazda"}
    ]
}
const cars = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CAR':
        return [
          ...state,
        //   state.cars = {
        //     ...state.cars),
        //     ...state.cars.slice(action.id + 1) 
        // }
          {
            id: action.id,
            text: action.text,
          }
        ]
    case 'REMOVE_CAR':
      return [
        ...state,
        cars = {
            ...state.cars.slice(0, action.id),
            ...state.cars.slice(action.id + 1) 
        }
      ]
      default:
        return state
    }
  }
  
  export default cars
  