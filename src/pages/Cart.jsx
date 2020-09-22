import React,{useContext} from 'react';
import CartColumns from '../components/layouts/CartColumns';
import CartList from '../components/layouts/CartList';
import CartSummary from '../components/layouts/CartSummary';
import {ProductContext} from '../contexts/ProductContext';

const Cart = ({props}) =>{
  const productContext=useContext(ProductContext);
return (
  <div>
    <div className="mt-4">
      <center>
        <h3>Cart</h3>
      </center>
    </div>
    {productContext.cart.length>0 ?
      <div className="mt-4">
        <CartColumns/>
        <CartList/>
        <CartSummary/>
      </div>
    :<center>
      <div>
        <h4>Your Cart is Empty</h4>
      </div>
    </center>
    }
  </div>
);
}
export default Cart;
