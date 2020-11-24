import React from 'react'
import '../assets/css/button.css'

const Button = (props) => {
  let activeStatus = props.item > 0 ? false : true
  return (
    <div>
      <h5>{props.title.toUpperCase()}</h5>
      <div className="addIngredientBtn">
        <button
          className={`removeBtn Btn ${props.item >= 0 ? 'add-btn-active' : ''}`}
          onClick={() => props.onClick('remove', props.title, props.price)}
          disabled={activeStatus}>
          Remove
        </button>
        <button
          className="addBtn Btn"
          onClick={() => props.onClick('add', props.title, props.price)}>
          Add
        </button>
      </div>
    </div>
  )
}

export default Button
