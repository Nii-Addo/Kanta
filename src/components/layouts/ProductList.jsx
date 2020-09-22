import React,{useContext,useState} from 'react'
import PropTypes from 'prop-types';
import GeneralProduct from '../../components/layouts/GeneralProduct';
import {ProductContext} from '../../contexts/ProductContext';
import '../../css/ProductListCss.css';

const ProductList = (props) => {
  const productContext=useContext(ProductContext);
  return (
  <div className="grid-container">
    {productContext.products.map(product=>{
      return <GeneralProduct key={product.id} product={product}/>
    })}
  </div>
  )
}

export default ProductList
