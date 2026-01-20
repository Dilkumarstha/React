import React from 'react'
import ComponentC from './ComponentC';

const ComponentB = ({numbB}) => {
  return (
    <div>ValueB : {numbB*numbB}
    <ComponentC numbC={numbB*numbB }/>
    </div>
  )
}

export default ComponentB;