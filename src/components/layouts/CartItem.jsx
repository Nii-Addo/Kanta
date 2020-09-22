import React from 'react'
import PropTypes from 'prop-types';
import '../../css/CartCss.css';

const CartItem = (props) => {
  const {id,name,image,price,total,count}=props.item;
  const {increaseQuantityInCart,decreaseQuantityInCart,removeItemFromCart}=props.productContext;
  return (
    <div className="row my-2 text-capitalize text-center align-items-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={image} style={{"width":'5rem',"height":'5rem'}} alt="product image" className="img-fluid"/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="div justify-content-center">
          <span className="btn mx-1" id="cart-btn" onClick={()=>{decreaseQuantityInCart(id)}}>-</span>
          <span className="btn mx-1" id="cart-btn">{count}</span>
          <span className="btn mx-1" id="cart-btn" onClick={()=>{increaseQuantityInCart(id)}}>+</span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2" onClick={()=>{removeItemFromCart(id)}}>
        Remove me
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total :</strong>
         {total}
      </div>
    </div>
  )
}

export default CartItem
