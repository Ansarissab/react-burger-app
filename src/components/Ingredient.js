import React from 'react'

function Ingredient(props) {
  return (
    <>
      {props.burger.map((cn, index) => {
        return <div key={index} className={cn}></div>
      })}
    </>
  )
}

export default Ingredient
