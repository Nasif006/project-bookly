import React, { useEffect, useState } from 'react';
import Weblayout from '../layout/Weblayout';
import axios from '../Admin/component/axios';
import { useCart } from "react-use-cart";


function Home() {
  const { addItem } = useCart();

const [featured, setFeatured] = useState([]);
const [newCome, setNewCome] = useState([]);

// categories:
const [fiction, setFiction] = useState([]);
const [documentary, setDocumentary] = useState([]);
const [business, setBusiness] = useState([]);
const [biography, setBiography] = useState([]);
const [informational, setInformational] = useState([]);

useEffect(() => {
  getBooks();
}, []);

const getBooks = async () => {
  let feat = await axios.get(`front_api/books.php?query_type=featured&limit=4`);
  setFeatured(feat.data);

  let newC = await axios.get(`front_api/books.php?query_type=new_product&limit=3`);
  setNewCome(newC.data);

  // fetches for other categories:
  let fic = await axios.get(`front_api/books.php?query_type=fiction&limit=3`);
  setFiction(fic.data);

  let doc = await axios.get(`front_api/books.php?query_type=documentary&limit=3`);
  setDocumentary(doc.data);

  let bus = await axios.get(`front_api/books.php?query_type=business&limit=3`);
  setBusiness(bus.data);

  let bio = await axios.get(`front_api/books.php?query_type=biography&limit=3`);
  setBiography(bio.data);

  let info = await axios.get(`front_api/books.php?query_type=informational&limit=3`);
  setInformational(info.data);
};


  return (
    <Weblayout>
      <div classNameName="App">
        

        <section id="billboard" className="position-relative d-flex align-items-center py-5 bg-light-gray"
          style={{backgroundImage: "url('assets/images/banner-image-bg.jpg')", backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center",height: "800px"}}>
          <div className="position-absolute end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next main-slider-button-next">
            <svg className="chevron-forward-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
              
            </svg>
          </div>
          <div className="position-absolute start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev main-slider-button-prev">
            <svg className="chevron-back-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
              
            </svg>
          </div>
          <div className="swiper main-swiper">
            <div className="swiper-wrapper d-flex align-items-center">
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                      <div className="banner-content">
                        <h2>The Fine Print Book Collection</h2>
                        <p>Best Offer Save 30%. Grab it now!</p>
                        <a href="%PUBLIC_URL%/index.html" className="btn mt-3">Shop Collection</a>
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="image-holder">
                        <img src="assets/images/banner-image2.png" className="img-fluid" alt="banner"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                      <div className="banner-content">
                        <h2>How Innovation works</h2>
                        <p>Discount available. Grab it now!</p>
                        <a href="%PUBLIC_URL%/index.html" className="btn mt-3">Shop Product</a>
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="image-holder">
                        <img src="assets/images/banner-image1.png" className="img-fluid" alt="banner"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                      <div className="banner-content">
                        <h2>Your Heart is the Sea</h2>
                        <p>Limited stocks available. Grab it now!</p>
                        <a href="%PUBLIC_URL%/index.html" className="btn mt-3">Shop Collection</a>
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="image-holder">
                        <img src="assets/images/banner-image.png" className="img-fluid" alt="banner"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="company-services" className="padding-large pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="cart-outline">
                      
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="card-title mb-1 text-capitalize text-dark">Free delivery</h4>
                    <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="quality">
                      
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="card-title mb-1 text-capitalize text-dark">Quality guarantee</h4>
                    <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="price-tag">
                      
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="card-title mb-1 text-capitalize text-dark">Daily offers</h4>
                    <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3 pb-lg-0">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="shield-plus">
                      
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="card-title mb-1 text-capitalize text-dark">100% secure payment</h4>
                    <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="best-selling-items" className="position-relative padding-large ">
          <div className="container">
            <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
              <h3 className="d-flex align-items-center">Featured</h3>
              <a href="%PUBLIC_URL%/index.html" className="btn">View All</a>
            </div>
            <div className="position-absolute top-50 end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next product-slider-button-next">
              <svg className="chevron-forward-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
                
              </svg>
            </div>
            <div className="position-absolute top-50 start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev product-slider-button-prev">
              <svg className="chevron-back-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
                
              </svg>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
  {
  
  // [
  //   {
  //     img: "assets/images/product-item1.png",
  //     title: "House of Sky Breath",
  //     author: "Lauren Asher",
  //     price: "$870",
  //     offer: "10% off",
  //   },
  //   {
  //     img: "assets/images/product-item2.png",
  //     title: "Heartland Stars",
  //     author: "Lauren Asher",
  //     price: "$870",
  //   },
  //   {
  //     img: "assets/images/product-item3.png",
  //     title: "Heavenly Bodies",
  //     author: "Lauren Asher",
  //     price: "$870",
  //   },
  //   {
  //     img: "assets/images/product-item4.png",
  //     title: "His Saving Grace",
  //     author: "Lauren Asher",
  //     price: "$870",
  //     offer: "10% off",
  //   },
  // ]
  
  featured.length > 0 && featured.map((d, key) => (
    <div className="col" key={d.id}>
      <div className="card position-relative p-4 border rounded-3 h-100">
        {/* {book.offer && (
          <div className="position-absolute">
            <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">{book.offer}</p>
          </div>
        )} */}
        <img src={`${process.env.REACT_APP_API_URL}${d.image}`} className="img-fluid shadow-sm" alt={d.name} />
        <h6 className="mt-4 mb-0 fw-bold">
          <a href="/">{d.name}</a>
        </h6>
        <div className="review-content d-flex">
          <p className="my-2 me-2 fs-6 text-black-50">{d.auth_name}</p>
          <div className="rating text-warning d-flex align-items-center">
            {[...Array(5)].map((_, i) => (
              <svg className="star star-fill" key={i}>
                {/* Insert your SVG star here */}
              </svg>
            ))}
          </div>
        </div>
        <span className="price text-primary fw-bold mb-2 fs-5">{d.price}</span>
        <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
          <button type="button" className="btn btn-dark" onClick={() => addItem(d)}> Add to cart
            {/*<svg className="cart"> Insert cart SVG </svg>*/}
          </button>
         {/* <a href="#" className="btn btn-dark">
            <svg className="wishlist"> Insert wishlist SVG </svg>
          </a>*/}
        </div>
      </div>
    </div>
  ))}
</div>

            {/* <div className="swiper product-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card position-relative p-4 border rounded-3">
                    <div className="position-absolute">
                      <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">10% off</p>
                    </div>
                    <img src="assets/images/product-item1.png" className="img-fluid shadow-sm" alt="product item"/>
                    <h6 className="mt-4 mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">House of Sky Breath</a></h6>
                    <div className="review-content d-flex">
                      <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                      <div className="rating text-warning d-flex align-items-center">
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                      </div>
                    </div>
                    <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                    <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                      <button type="button" href="#" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Tooltip on top">
                        <svg className="cart">
                          
                        </svg>
                      </button>
                      <a href="#" className="btn btn-dark">
                        <span>
                          <svg className="wishlist">
                            
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative p-4 border rounded-3">
                    <img src="assets/images/product-item2.png" className="img-fluid shadow-sm" alt="product item"/>
                    <h6 className="mt-4 mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Heartland Stars</a></h6>
                    <div className="review-content d-flex">
                      <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                      <div className="rating text-warning d-flex align-items-center">
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                      </div>
                    </div>

                    <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                    <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                      <button type="button" href="#" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Tooltip on top">
                        <svg className="cart">
                          
                        </svg>
                      </button>
                      <a href="#" className="btn btn-dark">
                        <span>
                          <svg className="wishlist"></svg>
                            
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative p-4 border rounded-3">
                    <img src="assets/images/product-item3.png" className="img-fluid shadow-sm" alt="product item"/>
                    <h6 className="mt-4 mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Heavenly Bodies</a></h6>
                    <div className="review-content d-flex">
                      <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                      <div className="rating text-warning d-flex align-items-center">
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                      </div>
                    </div>

                    <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                    <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                      <button type="button" href="#" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Tooltip on top">
                        <svg className="cart">
                          
                        </svg>
                      </button>
                      <a href="#" className="btn btn-dark">
                        <span>
                          <svg className="wishlist">
                            
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative p-4 border rounded-3">
                    <div className="position-absolute">
                      <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">10% off</p>
                    </div>
                    <img src="assets/images/product-item4.png" className="img-fluid shadow-sm" alt="product item"/>
                    <h6 className="mt-4 mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">His Saving Grace</a></h6>
                    <div className="review-content d-flex">
                      <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                      <div className="rating text-warning d-flex align-items-center">
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                      </div>
                    </div>

                    <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                    <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                      <button type="button" href="#" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Tooltip on top">
                        <svg className="cart">
                          
                        </svg>
                      </button>
                      <a href="#" className="btn btn-dark">
                        <span>
                          <svg className="wishlist">
                            
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative p-4 border rounded-3">
                    <img src="assets/images/product-item5.png" className="img-fluid shadow-sm" alt="product item"/>
                    <h6 className="mt-4 mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">My Dearest Darkest</a></h6>
                    <div className="review-content d-flex">
                      <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                      <div className="rating text-warning d-flex align-items-center d-flex align-items-center">
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                      </div>
                    </div>

                    <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                    <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                      <button type="button" href="#" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Tooltip on top">
                        <svg className="cart">
                          
                        </svg>
                      </button>
                      <a href="#" className="btn btn-dark">
                        <span>
                          <svg className="wishlist">
                            
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative p-4 border rounded-3">
                    <img src="assets/images/product-item6.png" className="img-fluid shadow-sm" alt="product item"/>
                    <h6 className="mt-4 mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">The Story of Success</a></h6>
                    <div className="review-content d-flex">
                      <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                      <div className="rating text-warning d-flex align-items-center">
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                        <svg className="star star-fill">
                          
                        </svg>
                      </div>
                    </div>

                    <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                    <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                      <button type="button" href="#" className="btn btn-dark" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Tooltip on top">
                        <svg className="cart">
                          
                        </svg>
                      </button>
                      <a href="#" className="btn btn-dark">
                        <span>
                          <svg className="wishlist">
                            
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div> */}
          </div>
        </section>

        <section id="limited-offer" className="padding-large"
          style={{ backgroundImage: "url('assets/images/banner-image-bg-1.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "800px" }}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 text-center">
                <div className="image-holder">
                  <img src="assets/images/banner-image3.png" className="img-fluid" alt="banner"/>
                </div>
              </div>
              <div className="col-md-5 offset-md-1 mt-5 mt-md-0 text-center text-md-start">
                <h2>30% Discount on all items. Hurry Up !!!</h2>
                <div id="countdown-clock" className="text-dark d-flex align-items-center my-3">
                  <div className="time d-grid pe-3">
                    <span className="days fs-1 fw-normal"></span>
                    <small>Days</small>
                  </div>
                  <span className="fs-1 text-primary">:</span>
                  <div className="time d-grid pe-3 ps-3">
                    <span className="hours fs-1 fw-normal"></span>
                    <small>Hrs</small>
                  </div>
                  <span className="fs-1 text-primary">:</span>
                  <div className="time d-grid pe-3 ps-3">
                    <span className="minutes fs-1 fw-normal"></span>
                    <small>Min</small>
                  </div>
                  <span className="fs-1 text-primary">:</span>
                  <div className="time d-grid ps-3">
                    <span className="seconds fs-1 fw-normal"></span>
                    <small>Sec</small>
                  </div>
                </div>
                <a href="%PUBLIC_URL%/index.html" className="btn mt-3">Shop Collection</a>
              </div>
            </div>
          </div>
        </section>

        <section id="items-listing" className="padding-large">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                <div className="featured border rounded-3 p-4">
                  <div className="section-title overflow-hidden mb-5 mt-2">
                    <h3 className="d-flex flex-column mb-0">Fiction</h3>
                  </div>
                  <div className="items-lists">
                    {
                      fiction.length > 0 && fiction.map((d, key) =>
                      <div className="item d-flex">
                      <img src={`${process.env.REACT_APP_API_URL}${d.image}`} className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">{d.name}</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">{d.auth_name}</p>

                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">{d.price}</span>
                      </div>
                      </div>
                      )
                    }
                    <hr className="gray-400"/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item1.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">The Midnight Garden</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                    <hr/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item3.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Shadow of the Serpent</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>

                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                <div className="latest-items border rounded-3 p-4">
                  <div className="section-title overflow-hidden mb-5 mt-2">
                    <h3 className="d-flex flex-column mb-0">Latest items</h3>
                  </div>
                  <div className="items-lists">
                    <div className="item d-flex">
                      <img src="assets/images/product-item4.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Whispering Winds</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                    <hr className="gray-400"/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item5.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">The Forgotten Realm</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                    <hr/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item6.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Moonlit Secrets</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                <div className="best-reviewed border rounded-3 p-4">
                  <div className="section-title overflow-hidden mb-5 mt-2">
                    <h3 className="d-flex flex-column mb-0">Best reviewed</h3>
                  </div>
                  <div className="items-lists">
                    <div className="item d-flex">
                      <img src="assets/images/product-item7.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">The Crystal Key</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                    <hr className="gray-400"/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item8.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Starlight Sonata</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                    <hr/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item9.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Tales of the Enchanted Forest</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5">$870</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
                <div className="on-sale border rounded-3 p-4">
                  <div className="section-title overflow-hidden mb-5 mt-2">
                    <h3 className="d-flex flex-column mb-0">On sale</h3>
                  </div>
                  <div className="items-lists">
                    <div className="item d-flex">
                      <img src="assets/images/product-item10.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">The Phoenix Chronicles</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5"><s className="text-black-50">$1666</s>
                          $999</span>
                      </div>
                    </div>
                    <hr className="gray-400"/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item11.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Dreams of Avalon</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5"><s className="text-black-50">$500</s>
                          $410</span>
                      </div>
                    </div>
                    <hr/>
                    <div className="item d-flex">
                      <img src="assets/images/product-item12.png" className="img-fluid shadow-sm" alt="product item"/>
                      <div className="item-content ms-3">
                        <h6 className="mb-0 fw-bold"><a href="%PUBLIC_URL%/index.html">Legends of the Dragon Isles</a></h6>
                        <div className="review-content d-flex">
                          <p className="my-2 me-2 fs-6 text-black-50">Lauren Asher</p>
                          <div className="rating text-warning d-flex align-items-center">
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                            <svg className="star star-fill">
                              
                            </svg>
                          </div>
                        </div>
                        <span className="price text-primary fw-bold mb-2 fs-5"><s className="text-black-50">$600</s>
                          $500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="padding-large pt-0">
          <div className="container">
            <div className="section-title overflow-hidden mb-4">
              <h3 className="d-flex align-items-center">Categories</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 border-0 rounded-3 position-relative">
                  <a href="%PUBLIC_URL%/index.html">
                    <img src="assets/images/category1.jpg" className="img-fluid rounded-3" alt="cart item"/>
                    <h6 className=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"><a href="%PUBLIC_URL%/index.html"
                        className="text-white">Romance</a></h6>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-4 border-0 rounded-3">
                  <a href="%PUBLIC_URL%/index.html">
                    <img src="assets/images/category2.jpg" className="img-fluid rounded-3" alt="cart item"/>
                    <h6 className=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"><a href="%PUBLIC_URL%/index.html"
                        className="text-white">Lifestyle</a></h6>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-4 border-0 rounded-3">
                  <a href="%PUBLIC_URL%/index.html">
                    <img src="assets/images/category3.jpg" className="img-fluid rounded-3" alt="cart item"/>
                    <h6 className=" position-absolute bottom-0 bg-primary m-4 py-2 px-3 rounded-3"><a href="%PUBLIC_URL%/index.html"
                        className="text-white">Recipe</a></h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers-reviews" className="position-relative padding-large"
          style={{ backgroundImage: "url('assets/images/banner-image-bg.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "600px" }}>
          <div className="container offset-md-3 col-md-6 ">
            <div className="position-absolute top-50 end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next testimonial-button-next">
              <svg className="chevron-forward-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
                
              </svg>
            </div>
            <div className="position-absolute top-50 start-0 ps-0 ps-xxl-5 ms-0 ms-xxl-5 swiper-prev testimonial-button-prev">
              <svg className="chevron-back-circle d-flex justify-content-center align-items-center p-2" width="80" height="80">
                
              </svg>
            </div>
            <div className="section-title mb-4 text-center">
              <h3 className="mb-4">Customers reviews</h3>
            </div>
            <div className="swiper testimonial-swiper ">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card position-relative text-left p-5 border rounded-3">
                    <blockquote>"I stumbled upon this bookstore while visiting the city, and it instantly became my favorite spot. The cozy atmosphere, friendly staff, and wide selection of books make every visit a delight!"</blockquote>
                    <div className="rating text-warning d-flex align-items-center">
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                    </div>
                    <h5 className="mt-1 fw-normal">Emma Chamberlin</h5>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative text-left p-5 border rounded-3">
                    <blockquote>"As an avid reader, I'm always on the lookout for new releases, and this bookstore never disappoints. They always have the latest titles, and their recommendations have introduced me to some incredible reads!"</blockquote>
                    <div className="rating text-warning d-flex align-items-center">
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                    </div>
                    <h5 className="mt-1 fw-normal">Thomas John</h5>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative text-left p-5 border rounded-3">
                    <blockquote>"I ordered a few books online from this store, and I was impressed by the quick delivery and careful packaging. It's clear that they prioritize customer satisfaction, and I'll definitely be shopping here again!"</blockquote>
                    <div className="rating text-warning d-flex align-items-center">
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                    </div>
                    <h5 className="mt-1 fw-normal">Kevin Bryan</h5>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative text-left p-5 border rounded-3">
                    <blockquote>“I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier
                      with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing
                      the perfect device for my needs. Highly recommended!”</blockquote>
                    <div className="rating text-warning d-flex align-items-center">
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                    </div>
                    <h5 className="mt-1 fw-normal">Stevin</h5>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card position-relative text-left p-5 border rounded-3">
                    <blockquote>“I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier
                      with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing
                      the perfect device for my needs. Highly recommended!”</blockquote>
                    <div className="rating text-warning d-flex align-items-center">
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                      <svg className="star star-fill">
                        
                      </svg>
                    </div>
                    <h5 className="mt-1 fw-normal">Roman</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="latest-posts" className="padding-large">
          <div className="container">
            <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
              <h3 className="d-flex align-items-center">Latest posts</h3>
              <a href="%PUBLIC_URL%/index.html" className="btn">View All</a>
            </div>
            <div className="row">
              <div className="col-md-3 posts mb-4">
                <img src="assets/images/post-item1.jpg" alt="post image" className="img-fluid rounded-3"/>
                <a href="blog.html" className="fs-6 text-primary">Books</a>
                <h4 className="card-title mb-2 text-capitalize text-dark"><a href="%PUBLIC_URL%/index.html">10 Must-Read Books of the Year: Our Top Picks!</a></h4>
                <p className="mb-2">Dive into the world of cutting-edge technology with our latest blog post, where we highlight
                  five essential gadge. <span><a className="text-decoration-underline text-black-50" href="%PUBLIC_URL%/index.html">Read More</a></span>
                </p>
              </div>
              <div className="col-md-3 posts mb-4">
                <img src="assets/images/post-item2.jpg" alt="post image" className="img-fluid rounded-3"/>
                <a href="blog.html" className="fs-6 text-primary">Books</a>
                <h4 className="card-title mb-2 text-capitalize text-dark"><a href="%PUBLIC_URL%/index.html">The Fascinating Realm of Science Fiction</a></h4>
                <p className="mb-2">Explore the intersection of technology and sustainability in our latest blog post. Learn about
                  the innovative <span><a className="text-decoration-underline text-black-50" href="%PUBLIC_URL%/index.html">Read More</a></span> </p>
              </div>
              <div className="col-md-3 posts mb-4">
                <img src="assets/images/post-item3.jpg" alt="post image" className="img-fluid rounded-3"/>
                <a href="blog.html" className="fs-6 text-primary">Books</a>
                <h4 className="card-title mb-2 text-capitalize text-dark"><a href="%PUBLIC_URL%/index.html">Finding Love in the Pages of a Book</a></h4>
                <p className="mb-2">Stay ahead of the curve with our insightful look into the rapidly evolving landscape of
                  wearable technology. <span><a className="text-decoration-underline text-black-50" href="%PUBLIC_URL%/index.html">Read More</a></span>
                </p>
              </div>
              <div className="col-md-3 posts mb-4">
                <img src="assets/images/post-item4.jpg" alt="post image" className="img-fluid rounded-3"/>
                <a href="blog.html" className="fs-6 text-primary">Books</a>
                <h4 className="card-title mb-2 text-capitalize text-dark"><a href="%PUBLIC_URL%/index.html">Reading for Mental Health: How Books Can Heal and Inspire</a></h4>
                <p className="mb-2">In today's remote work environment, productivity is key. Discover the top apps and tools that
                  can help you stay <span><a className="text-decoration-underline text-black-50" href="%PUBLIC_URL%/index.html">Read More</a></span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="instagram">
          <div className="container">
            <div className="text-center mb-4">
              <h3>Instagram</h3>
            </div>
            <div className="row">
              <div className="col-md-2">
                <figure className="instagram-item position-relative rounded-3">
                  <a href="https://templatesjungle.com/" className="image-link position-relative">
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        
                      </svg>
                    </div>
                    <img src="assets/images/insta-item1.jpg" alt="instagram" className="img-fluid rounded-3 insta-image"/>
                  </a>
                </figure>
              </div>
              <div className="col-md-2">
                <figure className="instagram-item position-relative rounded-3">
                  <a href="https://templatesjungle.com/" className="image-link position-relative">
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        
                      </svg>
                    </div>
                    <img src="assets/images/insta-item2.jpg" alt="instagram" className="img-fluid rounded-3 insta-image"/>
                  </a>
                </figure>
              </div>
              <div className="col-md-2">
                <figure className="instagram-item position-relative rounded-3">
                  <a href="https://templatesjungle.com/" className="image-link position-relative">
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        
                      </svg>
                    </div>
                    <img src="assets/images/insta-item3.jpg" alt="instagram" className="img-fluid rounded-3 insta-image"/>
                  </a>
                </figure>
              </div>
              <div className="col-md-2">
                <figure className="instagram-item position-relative rounded-3">
                  <a href="https://templatesjungle.com/" className="image-link position-relative">
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        
                      </svg>
                    </div>
                    <img src="assets/images/insta-item4.jpg" alt="instagram" className="img-fluid rounded-3 insta-image"/>
                  </a>
                </figure>
              </div>
              <div className="col-md-2">
                <figure className="instagram-item position-relative rounded-3">
                  <a href="https://templatesjungle.com/" className="image-link position-relative">
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        
                      </svg>
                    </div>
                    <img src="assets/images/insta-item5.jpg" alt="instagram" className="img-fluid rounded-3 insta-image"/>
                  </a>
                </figure>
              </div>
              <div className="col-md-2">
                <figure className="instagram-item position-relative rounded-3">
                  <a href="https://templatesjungle.com/" className="image-link position-relative">
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        
                      </svg>
                    </div>
                    <img src="assets/images/insta-item6.jpg" alt="instagram" className="img-fluid rounded-3 insta-image"/>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </section>
 
    </div>
    </Weblayout>
      
      );
    }

    export default Home;
