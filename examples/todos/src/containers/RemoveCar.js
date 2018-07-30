import React from 'react'
import { connect } from 'react-redux'
import { removeCar } from '../actions'

const RemoveCar = ({ dispatch }) => {
  return (
    <div>
        <button type="submit" onClick={() => dispatch(removeCar())}>
            Remove Car
        </button>
    </div>
  )
}

export default connect()(RemoveCar)
