import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { SmallAddToCartButton} from '../../components/styledComponents/Button';
import { BuyNowButton} from '../../components/styledComponents/Button';
import {ProductContext} from '../../contexts/ProductContext';
import '../../css/DetailsTopDivCss.css';
import styled from 'styled-components';

const StyledProductBriefInput=styled.input`
 appearance: none;
 box-shadow: none;
 color: rgb(34, 34, 34);
 display: block;
 font-size: 1rem;
 font-weight: 400;
 height: 1.5rem;
 letter-spacing: 0.012rem;
 margin-bottom: 0px;
 width: 100%;
 border: 1px solid rgb(138, 138, 138);
 border-image: initial;
 border-radius: 2px;
 padding: 0.5rem;
`;
const ProductBrief = (props) => {
 const {id,price,quantity_in_stock}=props.product;
   const productContext=useContext(ProductContext);
  return (
    <div className="d-brief">
      <p className="d-price-mod">GHC {price}</p>
      <h6>In Stock</h6>
      <div>
        <div className="mb-2">Quantity: </div>
        <StyledProductBriefInput className="form-control mb-2" type="number" min="0" max={quantity_in_stock}/>
      </div>
      <p className="mb-2">Total : 2</p>
      <p className="mb-2">Size : 14</p>
      <p className="mb-2">Arrival: Tuesday</p>
      <br/>
      <div className="d-brief-button mr-auto mb-2"><SmallAddToCartButton primary onClick={()=>productContext.addProductToCart(id)}>Add to Cart</SmallAddToCartButton></div>
      <div className="d-brief-button mr-auto"><BuyNowButton primary>Buy Now</BuyNowButton></div>
    </div>
  )
}

export default ProductBrief
