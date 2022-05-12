import React from 'react'

const Cart = (cart) => {
  return (
    <form
      action=""
      className={cart.cart ? "cart-form open-cart-form" : "cart-form"}
    >
      <i
        className="fas fa-times cart-close"
        onClick={() => cart.setCart(!cart.cart)}
      ></i>
      <h2>Your Shopping Cart is empty!</h2>
    </form>
  )
}

export default Cart