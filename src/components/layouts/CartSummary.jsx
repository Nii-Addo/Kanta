import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import {ProductContext} from '../../contexts/ProductContext';
import {AuthContext} from '../../contexts/AuthContext';
import {ClearCartButton} from '../../components/styledComponents/Button';
import {CheckoutButton} from '../../components/styledComponents/Button';
import {Link} from 'react-router-dom'
import '../../css/CartCss.css';

const CartSummary = (props) => {
  const productContext=useContext(ProductContext);
  const authContext=useContext(AuthContext);
  const {cartTotal,cartSubTotal,clearCart}=productContext;
  return (
    <div>
      <div className="d-flex ailgn-items-center">
          <div className="text-capitalize summary-mod">
            <div className="checkout-btn">
              <Link to={authContext.isAuthenticated ? '/checkout':'/login'}>
              <CheckoutButton>Checkout</CheckoutButton>
              </Link>
            </div>
            <div className="summary-text">
              <h5>
                <div className="summary">
                  <span>
                    Total:
                    <strong>GHC {cartTotal}</strong>
                  </span>
                </div>
              </h5>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CartSummary
