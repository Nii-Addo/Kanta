import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {ProductContext} from '../../contexts/ProductContext';
import { SmallAddToCartButton} from '../../components/styledComponents/Button';
import { BuyNowButton} from '../../components/styledComponents/Button';
import '../../css/DetailsTopDivCss.css';

const ProductInfo = (props) => {
  const {id,name,ratings,price,old_price,details}=props.product;
  const productContext=useContext(ProductContext);
  return (
    <React.Fragment>
      <div className="d-flex-inline flex-wrap border-bottom">
        <div>
          <h2 className="d-product-name"><span>{name}</span></h2>
        </div>
        <div>Store Name</div>
        <div className="review-mod"><span>{ratings} stars</span></div>
      </div>
      <div className="mt-2 mb-4">
        <span className="d-price-mod">GHC {price}</span>
        <div className="old-price-mod text-muted">GHC {old_price}</div>
      </div>
      <section>
        <p>color : {details.specifications.color}</p>
        <p>size :  {details.specifications.size}</p>
      </section>
      <div className="d-flex flex-wrap d-buy-button-mod">
        <div className="small-add-to-cart-button-space"><SmallAddToCartButton primary onClick={()=>productContext.addProductToCart(id)}>Add to Cart</SmallAddToCartButton></div>
        <div className="buy-now-button-space"><BuyNowButton primary>Buy Now</BuyNowButton></div>
      </div>
    </React.Fragment>
  )
}

export default ProductInfo
