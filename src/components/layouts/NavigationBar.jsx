import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'
import { LoginButtonLink } from '../../components/styledComponents/Button';
import { SignUpButtonLink } from '../../components/styledComponents/Button';
import SearchBar from '../../components/layouts/SearchBar';
import '../../css/NavigationBarCss.css';

const NavigationBar = () => {
return(
   <div className="navigationbar-mod">

      <div className="top-navigationbar">
          <Navbar collapseOnSelect expand="lg" className="navigationbar-item">
          <br/>
          <Navbar.Brand className="navigationbar-brand"><NavLink to="/"><div className="navigationbar-item logo-space">Kanta</div></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown" className="categories-space">
              <NavDropdown.Item href="#action/3.1"><div className="dropdown-text">All</div></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><div className="dropdown-text">Phones and Tablets</div></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><div className="dropdown-text">Electronics</div></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><div className="dropdown-text">Computing</div></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
              <div className="searchbar-space">
                <SearchBar/>
              </div>
             </Nav>
            <Nav>

            {/*far right menu items*/}
              <NavDropdown title="Login" id="collasible-nav-dropdown" className="login-space">
                <NavDropdown.Item>
                   <NavLink to="/login"><LoginButtonLink type="button">Sign in</LoginButtonLink></NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                   <NavLink to="/registration"><SignUpButtonLink type="button" className="signUp-button">Create Account</SignUpButtonLink></NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.3">Your Account</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">Your Orders</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.4">Saved Items</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="#deets" activeStyle={{fontWeight: "bold",color: "red"}}><div className="navigationbar-item returns-space">Returns</div></Nav.Link>
              <Nav.Link as={NavLink} eventKey={2} to="/cart" ><div className="navigationbar-item cart-space">Cart</div></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="bottom-navigationbar">

      </div>

  </div>
);
}
export default NavigationBar;
/*


*/
