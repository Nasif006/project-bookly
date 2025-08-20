import * as React from 'react';
import { Link,useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate=useNavigate();
  const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
    navigate('/login')
  }
    return(
          <>
          <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/user"}>User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/categories"}>Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/author"}>Author</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/books"}>Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/coupon"}>Coupons</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin/orders"}>Orders</Link>
                  </li>
                  
                </ul>
                <button className="btn btn-link" onClick={logout}>Logout</button>
              </div>
            </nav>
          </>
    )
}


export default Header;