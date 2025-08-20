import * as React from 'react';
import { Link, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useCart } from "react-use-cart";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


function Header(){
  library.add(fas, far, fab)

  const { totalUniqueItems } = useCart();
    return(
        <>
           

        {/* <div id="preloader" className="preloader-container">
          <div className="book">
            <div className="inner">
              <div className="left"></div>
              <div className="middle"></div>
              <div className="right"></div>
            </div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div> */}

        <div className="search-popup">
          <div className="search-popup-container">

            <form role="search" method="get" className="search-form" action="">
              <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value=""
                name="s" />
              <button type="submit" className="search-submit"><svg className="search">
                 
                </svg></button>
            </form>

            <h5 className="cat-list-title">Browse Categories</h5>

            <ul className="cat-list">
              <li className="cat-list-item">
                <a href="#" title="Romance">Romance</a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="Thriller">Thriller</a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="Sci-fi">Sci-fi</a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="Cooking">Cooking</a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="Health">Health</a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="Lifestyle">Lifestyle</a>
              </li>
              <li className="cat-list-item">
                <a href="#" title="Fiction">Fiction</a>
              </li>
            </ul>

          </div>
        </div>

        <header id="header" className="site-header">

          <div className="top-info border-bottom d-none d-md-block ">
            <div className="container-fluid">
              <div className="row g-0">
                <div className="col-md-4">
                  <p className="fs-6 my-2 text-center">Need any help? Call us <a href="#">112233344455</a></p>
                </div>
                <div className="col-md-4 border-start border-end">
                  <p className="fs-6 my-2 text-center">Summer sale discount off 60% off! <a className="text-decoration-underline"
                      href="%PUBLIC_URL%/index.html">Shop Now</a></p>
                </div>
                <div className="col-md-4">
                  <p className="fs-6 my-2 text-center">2-3 business days delivery & free returns</p>
                </div>
              </div>
            </div>
          </div>

          <nav id="header-nav" className="navbar navbar-expand-lg py-3">
            <div className="container"><Link to={"/"} className="nav-link me-4">
              <a className="navbar-brand" href="">
                <img src="assets/images/main-logo.png" className="logo"/>
              </a></Link>
              <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <svg className="navbar-icon">
                </svg>
              </button>
              <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                <div className="offcanvas-header px-4 pb-0">
                  <a className="navbar-brand" href="%PUBLIC_URL%/index.html">
                    <img src="assets/images/main-logo.png" className="logo"/>
                  </a>
                  <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"
                    data-bs-target="#bdNavbar"></button>
                </div>
                <div className="offcanvas-body">
                  <ul id="navbar"
                    className="navbar-nav text-uppercase justify-content-start justify-content-lg-center align-items-start align-items-lg-center flex-grow-1">
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link me-4"><FontAwesomeIcon icon="fa-solid fa-house" />&nbsp; Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/about"} className="nav-link me-4">About</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="%PUBLIC_URL%/index.html">Shop
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link me-4 dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu animate slide border">
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">About</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Shop</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Single Product</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Cart</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Checkout</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Blog</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Single Post</a>
                        </li>
                        <li>
                          <a href="%PUBLIC_URL%/index.html" className="dropdown-item fw-light">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link me-4" href="%PUBLIC_URL%/index.html">Contact</a>
                    </li>
                    <li className="nav-item">
                      <Link to={"/cart"} className="nav-link me-4">View Cart</Link>
                    </li>
                  </ul>
                  <div className="user-items d-flex">
                    <ul className="d-flex justify-content-end list-unstyled mb-0">
                      <li className="search-item pe-3">
                        <a href="#" className="search-button">
                          <svg className="search">

                          </svg>
                        </a>
                      </li>
                      <li className="pe-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <svg className="user">
                            
                          </svg>
                        </a>
          
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header border-bottom-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                <div className="tabs-listing">
                                  <nav>
                                    <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                                      <button className="nav-link text-capitalize active" id="nav-sign-in-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-sign-in" type="button" role="tab" aria-controls="nav-sign-in"
                                        aria-selected="true">Sign In</button>
                                      <button className="nav-link text-capitalize" id="nav-register-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-register" type="button" role="tab" aria-controls="nav-register"
                                        aria-selected="false">Register</button>
                                    </div>
                                  </nav>
                                  <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-sign-in" role="tabpanel"
                                      aria-labelledby="nav-sign-in-tab">
                                      <div className="form-group py-3">
                                        <label className="mb-2" for="sign-in">Username or email address *</label>
                                        <input type="text" minlength="2" name="username" placeholder="Your Username"
                                          className="form-control w-100 rounded-3 p-3" required/>
                                      </div>
                                      <div className="form-group pb-3">
                                        <label className="mb-2" for="sign-in">Password *</label>
                                        <input type="password" minlength="2" name="password" placeholder="Your Password"
                                          className="form-control w-100 rounded-3 p-3" required/>
                                      </div>
                                      <label className="py-3">
                                        <input type="checkbox" required="" className="d-inline"/>
                                        <span className="label-body">Remember me</span>
                                        <span className="label-body"><a href="#" className="fw-bold">Forgot Password</a></span>
                                      </label>
                                      <button type="submit" name="submit" className="btn btn-dark w-100 my-3">Login</button>
                                    </div>
                                    <div className="tab-pane fade" id="nav-register" role="tabpanel"
                                      aria-labelledby="nav-register-tab">
                                      <div className="form-group py-3">
                                        <label className="mb-2" for="register">Your email address *</label>
                                        <input type="text" minlength="2" name="username" placeholder="Your Email Address"
                                          className="form-control w-100 rounded-3 p-3" required/>
                                      </div>
                                      <div className="form-group pb-3">
                                        <label className="mb-2" for="sign-in">Password *</label>
                                        <input type="password" minlength="2" name="password" placeholder="Your Password"
                                          className="form-control w-100 rounded-3 p-3" required/>
                                      </div>
                                      <label className="py-3">
                                        <input type="checkbox" required="" className="d-inline"/>
                                        <span className="label-body">I agree to the <a href="#" className="fw-bold">Privacy
                                            Policy</a></span>
                                      </label>
                                      <button type="submit" name="submit" className="btn btn-dark w-100 my-3">Register</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="wishlist-dropdown dropdown pe-3">
                        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                          <svg className="wishlist">
                            
                          </svg>
                        </a>
                        <div className="dropdown-menu animate slide dropdown-menu-start dropdown-menu-lg-end p-3">
                          <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your wishlist</span>
                            <span className="badge bg-primary rounded-pill">2</span>
                          </h4>
                          <ul className="list-group mb-3">
                            <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                              <div>
                                <h5>
                                  <a href="%PUBLIC_URL%/index.html">The Emerald Crown</a>
                                </h5>
                                <small>Special discounted price.</small>
                                <a href="#" className="d-block fw-medium text-capitalize mt-2">Add to cart</a>
                              </div>
                              <span className="text-primary">$2000</span>
                            </li>
                            <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                              <div>
                                <h5>
                                  <a href="%PUBLIC_URL%/index.html">The Last Enchantment</a>
                                </h5>
                                <small>Perfect for enlightened people.</small>
                                <a href="#" className="d-block fw-medium text-capitalize mt-2">Add to cart</a>
                              </div>
                              <span className="text-primary">$400</span>
                            </li>
                            <li className="list-group-item bg-transparent d-flex justify-content-between">
                              <span className="text-capitalize"><b>Total (USD)</b></span>
                              <strong>$1470</strong>
                            </li>
                          </ul>
                          <div className="d-flex flex-wrap justify-content-center">
                            <a href="#" className="w-100 btn btn-dark mb-1" type="submit">Add all to cart</a>
                            <a href="%PUBLIC_URL%/index.html" className="w-100 btn btn-primary" type="submit">View cart</a>
                          </div>
                        </div>
                      </li>
                      <li className="cart-dropdown dropdown">
                        <a href="%PUBLIC_URL%/index.html" className="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                          aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                          <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
                          <span className="fs-6 fw-light">-({totalUniqueItems})</span>
                        </a>
                        <div className="dropdown-menu animate slide dropdown-menu-start dropdown-menu-lg-end p-3">
                          <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">2</span>
                          </h4>
                          <ul className="list-group mb-3">
                            <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                              <div>
                                <h5>
                                  <a href="%PUBLIC_URL%/index.html">Secrets of the Alchemist</a>
                                </h5>
                                <small>High quality in good price.</small>
                              </div>
                              <span className="text-primary">$870</span>
                            </li>
                            <li className="list-group-item bg-transparent d-flex justify-content-between lh-sm">
                              <div>
                                <h5>
                                  <a href="%PUBLIC_URL%/index.html">Quest for the Lost City</a>
                                </h5>
                                <small>Professional Quest for the Lost City.</small>
                              </div>
                              <span className="text-primary">$600</span>
                            </li>
                            <li className="list-group-item bg-transparent d-flex justify-content-between">
                              <span className="text-capitalize"><b>Total (USD)</b></span>
                              <strong>$1470</strong>
                            </li>
                          </ul>
                          <div className="d-flex flex-wrap justify-content-center">
                            <a href="%PUBLIC_URL%/index.html" className="w-100 btn btn-dark mb-1" type="submit">View Cart</a>
                            <a href="%PUBLIC_URL%/index.html" className="w-100 btn btn-primary" type="submit">Go to checkout</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

        </header>
        </>
    )
}

export default Header;