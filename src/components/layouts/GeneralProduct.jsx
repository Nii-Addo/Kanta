import React,{useContext} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GeneralProductWrapper } from '../../components/styledComponents/Divs';
import '../../css/GeneralProductCss.css';
import {ProductContext} from '../../contexts/ProductContext';

const GeneralProduct = (props) => {
  const {id,image,name,price,old_price,discount}=props.product;
  const productContext=useContext(ProductContext);
  return (
    <React.Fragment>
    {/*This is a bug,fix it*/}
       <GeneralProductWrapper onClick={()=>productContext.getProduct(id)}>
         <Link to={location => ({ ...location, pathname: `/products/${id}` })}>
           <img src={image} className="img-fluid general-product-image" alt="product name"/>
           <div className="d-flex-inline product-text discount-mod">-{discount}%</div>
           <div className="d-flex-inline flex-wrap general-product-details">
             <div className="general-product-name-mod">
               <span className="product-text general-product-name">{name}</span>
             </div>
             <div className="d-flex-inline flex-wrap">
               <div className="product-text general-product-price-mod mt-2 mb-2">GHC {price}</div>
               <div className="product-text general-product-old-price-mod">GHC {old_price}</div>
             </div>
           </div>
         </Link>
       </GeneralProductWrapper>
   </React.Fragment>
  )
}

export default GeneralProduct
