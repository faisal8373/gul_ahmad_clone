import React from "react";
import './SubscribeStyle.css';

function Subscribe() {
  return (
    <div className="row justify-content-center bg-dark bg-opacity-10 p-3">
      
        <h1 className="display-5">SUBSCRIBE NOW</h1>
        <p>
          Join GulAhmed and get all the latest news, trends and offers straight
          to your inbox
        </p>
        
        
        <div className='col-3 m-0 p-0 form-border d-flex'>
        
        <input className="form-control " type="email" required placeholder="Enter your email" />
        <button className="btn btn-dark p-2 " type="submit">SUBSCRIBE</button>
     
     </div>
     </div>
      
    
  );
}

export default Subscribe;
