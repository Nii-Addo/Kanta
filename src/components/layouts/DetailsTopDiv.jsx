import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import ProductInfo from '../../components/layouts/ProductInfo';
import ProductBrief from '../../components/layouts/ProductBrief';
import withProductRef from '../../components/layouts/WithProductRef';
import '../../css/DetailsTopDivCss.css';

const DetailsTopDiv = (props) => {
  const EnhancedProductInfo=withProductRef(ProductInfo);
  const EnhancedProductBrief=withProductRef(ProductBrief);
  return (
    <React.Fragment>
      <div className="row">
        <div className="d-left-col col-3">
          <img src={props.product.image} className="img-fluid d-product-image" alt="product name"/>
        </div>
        <div className="d-center-col col-7">
          <EnhancedProductInfo/>
        </div>
        <div className="d-right-col col-2">
          <EnhancedProductBrief/>
        </div>
      </div>
    </React.Fragment>
    );
}

export default withProductRef(DetailsTopDiv)
