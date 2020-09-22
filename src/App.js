import React from 'react';
import {AuthProvider} from './contexts/AuthContext';
import {ProductProvider} from './contexts/ProductContext';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import KantaLayout from './KantaLayout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';

const AppRoutes=()=>{
  return(
    <>
    <Switch>
      <Route path="/login">
        <SignIn/>
      </Route>
      <Route path="/registration">
        <SignUp/>
      </Route>
      <KantaLayout>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/products/:id">
          <ProductDetails/>
         </Route>
         <Route path="/cart">
          <Cart/>
         </Route>
         <Route path="/checkout">
          <Checkout/>
         </Route>
      </KantaLayout>
       <Route path="*">
         <PageNotFound/>
       </Route>
    </Switch>
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <AppRoutes/>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
