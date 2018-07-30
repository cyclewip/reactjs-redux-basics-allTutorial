import React from 'react'

const Car = ({ onClick, text }) => (
    <li
      onClick={onClick}> {text}
    </li>
)

export default Car