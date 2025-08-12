import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/importfiles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
 
function Weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>     
     
  )
}

export default Weblayout