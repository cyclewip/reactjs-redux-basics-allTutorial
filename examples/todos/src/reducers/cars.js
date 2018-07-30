const initialState =[
    {id: 0, text: 'BMW'},
    {id: 1, text: 'Volvo'},
    {id: 2, text: 'Jaguar'}
  ]
  

const cars = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CAR':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
          }
        ]
    case 'REMOVE_CAR':
      return [
        ...state,
        {
          id: action.id,
        }
      ]
      default:
        return state
    }
  }
  
  export default cars
  