import * as React from 'react';
import { Link, useLocation } from 'react-router'

function Footer(){
    return(
        <>
            <footer id="footer" className="padding-large">
          <div className="container">
            <div className="row">
              <div className="footer-top-area">
                <div className="row d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 col-sm-6 pb-3">
                    <div className="footer-menu">
                      <img src="assets/images/main-logo.png" alt="logo" className="img-fluid mb-2"/>
                      <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio
                        erat nullam fringilla.</p>
                      <div className="social-links">
                        <ul className="d-flex list-unstyled">
                          <li>
                            <a href="#">
                              <svg className="facebook">
                                
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg className="instagram">
                                
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg className="twitter">
                                
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg className="linkedin">
                                
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg className="youtube">
                                
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 pb-3">
                    <div className="footer-menu text-capitalize">
                      <h5 className="widget-title pb-2">Quick Links</h5>
                      <ul className="menu-list list-unstyled text-capitalize">
                        <li className="menu-item mb-1">
                          <a href="#">Home</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">About</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Shop</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Blogs</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 pb-3">
                    <div className="footer-menu text-capitalize">
                      <h5 className="widget-title pb-2">Help & Info Help</h5>
                      <ul className="menu-list list-unstyled">
                        <li className="menu-item mb-1">
                          <a href="#">Track Your Order</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Returns Policies</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Shipping + Delivery</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Contact Us</a>
                        </li>
                        <li className="menu-item mb-1">
                          <a href="#">Faqs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 pb-3">
                    <div className="footer-menu contact-item">
                      <h5 className="widget-title text-capitalize pb-2">Contact Us</h5>
                      <p>Do you have any queries or suggestions? <a href="mailto:"
                          className="text-decoration-underline">yourinfo@gmail.com</a></p>
                      <p>If you need support? Just give us a call. <a href="#" className="text-decoration-underline">+55 111 222
                          333 44</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <hr/>
        <div id="footer-bottom" className="mb-2">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="ship-and-payment d-flex gap-md-5 flex-wrap">
                <div className="shipping d-flex">
                  <p>We ship with:</p>
                  <div className="card-wrap ps-2">
                    <img src="assets/images/dhl.png" alt="visa"/>
                    <img src="assets/images/shippingcard.png" alt="mastercard"/>
                  </div>
                </div>
                <div className="payment-method d-flex">
                  <p>Payment options:</p>
                  <div className="card-wrap ps-2">
                    <img src="assets/images/visa.jpg" alt="visa"/>
                    <img src="assets/images/mastercard.jpg" alt="mastercard"/>
                    <img src="assets/images/paypal.jpg" alt="paypal"/>
                  </div>
                </div>
              </div>
              <div className="copyright">
                <p>© Copyright 2024 Bookly. HTML Template by <a href="https://templatesjungle.com/"
                    target="_blank">TemplatesJungle</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Footer;