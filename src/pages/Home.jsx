import React,{useContext} from 'react';
import ProductList from '../components/layouts/ProductList';
import '../css/HomeCss.css';

const Home = ({props}) => {
 return(
  <div className="results-mod">
    <ProductList/>
  </div>
 );
}
export default Home;
