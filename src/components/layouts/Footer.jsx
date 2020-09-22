import React from 'react';
import '../../css/FooterCss.css';

const Footer = ({}) =>{
  return (
    <footer className="footer d-flex flex-wrap">
        <div className="container bottom_border">
            <div className="row">
                <div className=" col-sm-4 col-md col-sm-4  col-12 col text-left">
                    <h5 className="footer-headings footer-header-col pt2">About Pion Tech</h5>
                    <ul className="footer_ul">
                    <li><a href="http://webenlance.com">Image Rectoucing</a></li>
                    <li><a href="http://webenlance.com">Clipping Path</a></li>
                    <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
                    <li><a href="http://webenlance.com">Ebay & Amazon</a></li>
                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                    </ul>
                </div>

                <div className=" col-sm-4 col-md  col-6 col text-left">
                    <h5 className="footer-headings footer-header-col pt2">Make money with Jarahe</h5>
                    <ul className="footer_ul">
                    <li><a href="http://webenlance.com">Image Rectoucing</a></li>
                    <li><a href="http://webenlance.com">Clipping Path</a></li>
                    <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
                    <li><a href="http://webenlance.com">Ebay & Amazon</a></li>
                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                    </ul>
                </div>

                <div className=" col-sm-4 col-md  col-6 col text-left">
                    <h5 className="footer-headings footer-header-col pt2">Let Us Help You</h5>
                    <ul className="footer_ul">
                    <li><a href="http://webenlance.com">Remove Background</a></li>
                    <li><a href="http://webenlance.com">Shadows & Mirror Reflection</a></li>
                    <li><a href="http://webenlance.com">Logo Design</a></li>
                    <li><a href="http://webenlance.com">Vectorization</a></li>
                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                    </ul>
                </div>

                <div className=" col-sm-4 col-md  col-12 col text-left">
                    <h5 className="footer-headings footer-header-col pt2">Connect with us</h5>
                    <ul className="social_footer_ul">
                         <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
                         <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
                         <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
                         <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
                     </ul>
                </div>
            </div>
        </div>

        <hr/>
        <div className="container d-flex justify-items-center alin-items-center">
          <p className="mx-auto">Copyright @2020 | With Love from GH by <a href="#">PionTech</a></p>
        </div>

    </footer>
  );
}

export default Footer;
