import React,{useContext} from 'react'
import PropTypes from 'prop-types';
import CartItem from '../../components/layouts/CartItem';
import {ProductContext} from '../../contexts/ProductContext';

const CartList = (props) => {
    const productContext=useContext(ProductContext);
  return (
    <div className="container-fluid">
      {productContext.cart.map(item=>{
        return <CartItem key={item.id} item={item} productContext={productContext}/>
      })}
    </div>
  )
}

export default CartList
