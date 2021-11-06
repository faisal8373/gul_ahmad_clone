import React from "react";

function Subscribe() {
  return (
    <div className="row justify-content-center">
      <div className=" row">
        <h1 className="display-5">SUBSCRIBE NOW</h1>
        <p>
          Join GulAhmed and get all the latest news, trends and offers straight
          to your inbox
        </p>

        <div class="input-group mb-3 col-5">
          <span class="input-group-text bg-dark" id="basic-addon1">
            
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span class="input-group-text bg-dark text-white" id="basic-addon2">Subscribe</span>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
