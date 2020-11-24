import React, { Component } from 'react'
import Checkout from './Checkout'
import Button from './Button'
import '../assets/css/burger.css'

export default class Burger extends Component {
  state = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    price: 3,
    haveIngredient: false,
    showModal: false
  }
  data = {}
  addRemoveIngredients = (action, ingredient, amount) => {
    let { lettuce, bacon, cheese, meat, price } = this.state
    let stateValue

    switch (ingredient) {
      case 'lettuce': {
        stateValue = lettuce
        break
      }
      case 'bacon': {
        stateValue = bacon
        break
      }
      case 'cheese': {
        stateValue = cheese
        break
      }
      case 'meat': {
        stateValue = meat
        break
      }
      default:
        break
    }
    if (action === 'add') {
      stateValue = stateValue + 1
      price = price + amount
      this.setState({
        price,
        haveIngredient: true
      })
    } else if (action === 'remove') {
      stateValue = stateValue - 1
      price = price - amount
      this.setState({
        price: price >= 0 ? price : 0,
        haveIngredient: price <= 3 ? false : true
      })
    }

    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0
    })
  }

  burgerIngredients = () => {
    let { lettuce, bacon, cheese, meat } = this.state
    let burger = []

    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuce"></div>)
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(<div key={burger.length} className="bacon"></div>)
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheese"></div>)
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meat"></div>)
    }
    if (burger.length === 0)
      burger.push(
        <h4 key="0" className="align-center">
          Start adding ingredients!
        </h4>
      )
    return burger
  }
  setShowModal = (value) => this.setState({ showModal: value })
  loadCheckoutModal = () => {
    this.setShowModal(true)
    this.data = {
      lettuce: this.state.lettuce,
      bacon: this.state.bacon,
      cheese: this.state.cheese,
      meat: this.state.meat,
      price: this.state.price
    }
  }
  clearState = () => {
    console.log('here')
    this.setState({
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
      price: 3,
      haveIngredient: false,
      showModal: false
    })
  }

  render() {
    let { lettuce, bacon, cheese, meat } = this.state
    return (
      <div>
        <div className="burgerIngredients">
          <div className="burger-top"></div>
          {this.burgerIngredients()}
          <div className="burger-bottom"></div>
        </div>
        <div className="ingredientsBtnBlock">
          <h5>Price $ {this.state.price}</h5>
          <Button
            title="lettuce"
            price={3.5}
            item={lettuce}
            onClick={(action, ingredient, amount) =>
              this.addRemoveIngredients(action, ingredient, amount)
            }
          />
          <Button
            title="bacon"
            price={2.5}
            item={bacon}
            onClick={(action, ingredient, amount) =>
              this.addRemoveIngredients(action, ingredient, amount)
            }
          />
          <Button
            title="cheese"
            price={3}
            item={cheese}
            onClick={(action, ingredient, amount) =>
              this.addRemoveIngredients(action, ingredient, amount)
            }
          />
          <Button
            title="meat"
            price={5.5}
            item={meat}
            onClick={(action, ingredient, amount) =>
              this.addRemoveIngredients(action, ingredient, amount)
            }
          />
          <div>
            <button
              className={`order-btn ${
                this.state.haveIngredient ? 'order-btn-active' : ''
              }`}
              disabled={!this.state.haveIngredient}
              onClick={() => this.loadCheckoutModal()}>
              CHECKOUT
            </button>
            <Checkout
              show={this.state.showModal}
              setShow={this.setShowModal}
              data={this.data}
              onClick={() => this.clearState()}
            />
          </div>
        </div>
      </div>
    )
  }
}
