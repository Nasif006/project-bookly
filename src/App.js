import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import { CartProvider, useCart } from "react-use-cart";

import Cart from './pages/Cart';
import Shop_Category from './pages/Shop_Category';
import Checkout from './pages/Checkout';
import ThankYouPage from './pages/thanku';


// admin route
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Categories from './Admin/Categories';
import Author from './Admin/Author';
import Books from './Admin/Books';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';
import Protected from './Admin/protected';
import Coupon from './Admin/Coupon';
import Orders from './Admin/Orders';

function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });

  return (
        <>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route path='/cart' element={<Cart/>}/>

              <Route path='/Shop_Category' element={<Shop_Category/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/thanku' element={<ThankYouPage/>}/>
              
              {/* Admin route */}
              <Route path= {"/admin/dashboard"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Dashboard /> 
              </Protected>
              } />
              <Route path= {"/admin/user"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Users /> 
              </Protected>
              } />
              <Route path= {"/admin/categories"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Categories /> 
                </Protected>
                } />
              <Route path= {"/admin/author"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Author /> 
                </Protected>
                } />
              <Route path= {"/admin/books"} element={
                <Protected  isSignedIn= {isSignedIn} >
                  <Books /> 
                </Protected>
                } />
                <Route path= {"/admin/coupon"} element={
                    <Protected  isSignedIn= {isSignedIn} >
                      <Coupon /> 
                    </Protected>
                    } />
                <Route path= {"/admin/orders"} element={
                    <Protected  isSignedIn= {isSignedIn} >
                      <Orders /> 
                    </Protected>
                    } />
              <Route path="/admin/add-user" element={<Useradd />} />
          </Routes>
          </CartProvider>
        </>
      );
    }

    export default App;
