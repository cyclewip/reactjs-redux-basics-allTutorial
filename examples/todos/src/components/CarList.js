import React from 'react'
import Car from './Car';

const CarList = ({ cars, toggleCar }) => (
  <ul>
    {cars.map(car =>
      <Car
        key={car.id}
        {...car}
        onClick={() => toggleCar(car.id)}
      />
    )}
  </ul>
)

export default CarList