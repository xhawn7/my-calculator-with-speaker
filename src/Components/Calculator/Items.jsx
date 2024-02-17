import React from 'react'
import { items } from '../../Constants/constants'
import Item from './Item'

const Items = ({ dispatch }) => {
  return (
    <div
      className={`aspect-4/5 grid grid-cols-4 gap-4 p-4 2xl:pb-14 bg-black `}
    >
      {items.map((item, index) => (
        <Item item={item} dispatch={dispatch} key={index} index={index} />
      ))}
    </div>
  )
}

export default Items
