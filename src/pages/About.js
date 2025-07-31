import * as React from 'react';
import { Link, useLocation } from 'react-router'

function About(){
    return(
        <>
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
                <h2>About us</h2>
                <Link to={"/"} ><a href="" className="btn mt-3"> Back to Shop</a></Link>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default About;