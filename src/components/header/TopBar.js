import React from "react";

function TopBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid row justify-content-end" >
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <div className='d-none d-md-block col-5'>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <p className= 'nav-link'>
                  SELECT CURRENCY:
                </p>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PKR
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                     AUD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GBP
                    </a>
                  </li>
                 
                  <li>
                    <a className="dropdown-item" href="#">
                      CAD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     SAR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AED
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <p className="nav-link ">FREE SHIPPING IN PAKISTAN on Orders Over PKR 2000</p>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-5 " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 navbar-expand-md">
              <li className="nav-item">
                <p className= 'nav-link'>
                GUL AHMED STORE 
                </p>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PKR
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                     AUD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GBP
                    </a>
                  </li>
                 
                  <li>
                    <a className="dropdown-item" href="#">
                      CAD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     SAR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      AED
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <p className="nav-link ">FREE SHIPPING IN PAKISTAN on Orders Over PKR 2000</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopBar;
