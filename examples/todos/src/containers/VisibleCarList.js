import { connect } from 'react-redux'
import { toggleCar } from '../actions'
import CarList from '../components/CarList'
import { VisibilityFilters } from '../actions'

const getCars = (cars, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return cars
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  cars: getCars(state.cars, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleCar: id => dispatch(toggleCar(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList)
