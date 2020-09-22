import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { StaticProductWrapper } from '../../components/styledComponents/Divs';
import { SmallAddToCartButton} from '../../components/styledComponents/Button';
import {ProductContext} from '../../contexts/ProductContext';
import '../../css/StaticProductCss.css';

const StaticProduct = (props) => {
  const {id,name,price,old_price,discount}=props.product;
   const productContext=useContext(ProductContext);
  return (
    <React.Fragment>
       <StaticProductWrapper className="mx-auto">
             <img src="/images/Banjoman.JPG" className="img-fluid s-product-image" alt="product name"/>
             <div className="d-flex-inline flex-wrap">
               <div className="s-pname-mod">
                 <span className="product-text s-p-name">{name}</span>
               </div>
               <div className="d-flex-inline flex-wrap">
                 <div className="s-product-text s-price-mod mt-2 mb-2">GHC {price}</div>
                 <div className="s-product-text s-old-price-mod">GHC {old_price}</div>
               </div>
               <div className="d-flex-inline product-text discount-mod">-{discount}%</div>
             </div>
               <div className="static-add-to-cart-button-space"><SmallAddToCartButton primary onClick={()=>productContext.addProductToCart(id)}>Add to Cart</SmallAddToCartButton></div>
       </StaticProductWrapper>
   </React.Fragment>
  )
}

export default StaticProduct
