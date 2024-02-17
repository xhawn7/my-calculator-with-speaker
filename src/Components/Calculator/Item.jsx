import React from 'react'
import { setColor } from '../../utils'

const Item = ({ item, dispatch, index }) => {
  const { value, type } = item
  return (
    <button
      onClick={(e) => dispatch({ type: type, payload: e.target.innerText })}
      className={`
      ${item.value === '0' ? 'col-span-2' : 'col-spam-1'}
      ${setColor(index)}
      rounded-full  outline-none focus:outline-none  hover:bg-opacity-60 font-light
    `}
    >
      {value}
    </button>
  )
}

export default Item
