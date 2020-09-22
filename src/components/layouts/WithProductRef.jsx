import React,{useState,useContext,useRef,useEffect} from 'react'
import PropTypes from 'prop-types'
import {ProductContext} from '../../contexts/ProductContext';

const withProductRef = WrappedComponent => {
  return function ProductRefComponent (props ){
    const productContext=useContext(ProductContext);
    const product=productContext.productDetail;
    const productRef = useRef(product);
    useEffect(() => {
        productRef.current=product;
    }, [product]);
    return <WrappedComponent product={product} {...props}/>
  }
}

export default withProductRef
