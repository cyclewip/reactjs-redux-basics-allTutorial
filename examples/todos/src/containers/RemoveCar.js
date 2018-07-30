import React from 'react'
import { connect } from 'react-redux'
import { removeCar } from '../actions'

const RemoveCar = ({ dispatch }) => {
  return (
    <div>
        <button type="submit" onClick={() => removeCar()}>
            Remove Car
        </button>
    </div>
  )
}

export default connect()(RemoveCar)
