import React from 'react';
import PropTypes from 'prop-types';
import { Link,useParams } from 'react-router-dom';
import TabbedMenu from '../components/layouts/TabbedMenu';
import DetailsTopDiv from '../components/layouts/DetailsTopDiv';
import StaticProduct from '../components/layouts/StaticProduct';
import withProductRef from '../components/layouts/WithProductRef';
import '../css/ProductDetailsCss.css';

const ProductDetails = ({props}) => {
  const EnhancedTabbedMenu=withProductRef(TabbedMenu);
  const EnhancedStaticProduct=withProductRef(StaticProduct);
  return (
    <React.Fragment>
      <div className="container-fluid top-d-wrap">
        <DetailsTopDiv />
      </div>
      <div className="d-flex flex-wrap bottom-d-wrap">
        <div className="col-10">
          <EnhancedTabbedMenu/>
        </div>
        <div className="static-product-mod col-2">
          <EnhancedStaticProduct/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default withProductRef(ProductDetails);
/*



*/
