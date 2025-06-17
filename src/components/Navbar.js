import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; 
import { useLocation, useNavigate } from 'react-router'
function Navbar() {
  const navigate = useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  let location = useLocation()
 useEffect(() => {
   console.log(location.pathname)
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CloudNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} aria-current="page" to="/about">
                About
              </Link>
            </li>
           
          </ul>
          {!localStorage.getItem('token') ?<form className="d-flex " role="search">
            <Link class="btn btn-primary mx-2" to="/login" role="button">Login</Link>
            <Link class="btn btn-primary" to="/signup" role="button">SignUp</Link>
          </form>:<button onClick={handlelogout} className="btn btn-primary">Logout</button>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
