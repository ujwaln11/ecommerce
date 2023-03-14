import React from 'react'
// import './Cart.css'
import '../../App.css';

const Cart = (props) => {

    const totalPrice = props.cartItems.reduce((price, item)=> price + item.quantity * item.price,0)
    
  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'>
            CART ITEMS
        </h2>
        <div className='cart-clear'>
            {props.cartItems.length>=1 && (
                <span className='cart-clear-button' onClick={props.handleCartClear}>CLEAR <i class="fa fa-trash" aria-hidden="true"></i></span>
            )}
        </div>
        {props.cartItems.length === 0 && (
            <div className='cart-items-empty'>No items are Added</div>
        )}
        <div>
            {props.cartItems.map((item) => (
                <div key={item.id} className='cart-items-list'>
                    <img className='cart-items-image' src={item.image} alt={item.title} />
                    <div className='cart-items-name'>{item.title}</div>
                    <div className='cart-items-function'>
                        <button className='cart-items-add' onClick={() => props.handleAddProduct(item)}>+</button>
                        <button className='cart-items-remove' onClick={() => props.handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-items-price'>{item.quantity} * ${item.price}</div>
                </div>
            ))}
        </div>
        <div className='cart-items-total-price-name'>
            Total Price
            <div className='cart-items-total-price'>${totalPrice}</div>
        </div>
    </div>
  )
}

export default Cart