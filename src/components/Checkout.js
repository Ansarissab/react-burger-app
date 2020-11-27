import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function Checkout(props) {
  const handleClose = () => props.setShow(false)
  return (
    <Modal show={props.show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Your Burger contains </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="iterate-object">
          {
            <ul>
              {Object.entries(props.data).map((item) => {
                return (
                  <li key={item}>
                    {item[1]} {item[0]}
                  </li>
                )
              })}
            </ul>
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClick}>
          Order Now
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Checkout
