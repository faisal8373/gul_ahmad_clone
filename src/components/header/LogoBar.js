import React from "react";
import logo from "../../assets/gulahmed-logo.png";

function LogoBar() {
  return (
    <div className="row justify-content-between p-3">
      <div className="col-4">
        <img src={logo} alt="GulAhmad Logo" />
      </div>

      <div className="col-4 pe-5">
        <form className="d-flex">
          <button className="input-group-text" id="btnGroupAddon">
            <i className="bi bi-camera-fill h5 pt-2" />
          </button>
          <input
            className="form-control "
            type="search"
            placeholder="Search Entire Store Here..."
            aria-label="Search"
          ></input>

          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          <i className="bi bi-cart h4 pt-3 ps-3"></i>
        </form>
      </div>
    </div>
  );
}

export default LogoBar;
