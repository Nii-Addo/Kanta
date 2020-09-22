import React from 'react';
import NavigationBar from './components/layouts/NavigationBar';
import Footer from './components/layouts/Footer';
import './css/JaraheLayoutCss.css';

const KantaLayout = ({children}) => (
  <div className="layout-mod">
    <div className="layout-header fixed-top">
      <NavigationBar/>
    </div>
    <div className="layout-content">
      {children}
    </div>
    <div className="layout-footer" id="footer">
       <Footer/>
    </div>
  </div>
);

export default KantaLayout;
