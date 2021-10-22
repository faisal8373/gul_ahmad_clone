import React from "react";

function Categories() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light " data-spy="affix" >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SALE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CLEARANCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  UNSTITCHED
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WOMEN
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SHOES & BAGS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  IDEAS HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  KIDS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Categories;
