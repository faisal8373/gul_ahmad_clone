import React from "react";
import Logo from "../../assets/gulahmed-logo_1.png";
import "./FooterStyle.css";
import card1 from '../../assets/cards/card1.png'

function Footer() {
  return (
      <div>
    <div className="row mt-5 justify-content-evenly">
      <div className="col-3 mt-3">
        <img className="p-3" src={Logo} alt="Logo" />
        <br />
        <div className="m-3 h4">
          <i class="bi bi-facebook p-1 m-2 icon-border text-primary"></i>
          <i class="bi bi-instagram p-1 m-2 icon-border text-danger"></i>
          <i class="bi bi-twitter p-1 m-2 icon-border text-primary"></i>
          <i class="bi bi-youtube p-1 m-2 icon-border text-danger"></i>
        </div>
      </div>

      <div className="col-2 ">
          
       <p className='text-start p-1 h5'>ABOUT GULAHMED</p>
       <p className='text-start p-1'> <a href="link here">About Us</a></p>
       <p className='text-start p-1'> <a href="link here">Company</a></p>
       <p className='text-start p-1'><a href="link here">Careers</a></p>
       <p className='text-start p-1'> <a href="link here">Store Locator</a></p>
      
      </div>

      <div className="col-2 ">
      
          <p className='text-start p-1 h5'>MY ACCOUNT</p>
          <p className='text-start p-1'> <a href="link here">Login</a></p>
          <p className='text-start p-1'><a href="link here">Order History</a></p>
          <p className='text-start p-1'> <a href="link here">Order Status</a></p>
         
         </div>
         <div className="col-2 ">
         
          <p className='text-start p-1 h5'>CUSTOMER CARE</p>
          <p className='text-start p-1'> <a href="link here">Contact Us</a></p>
          <p className='text-start p-1'> <a href="link here">Complaint/Inquiry Form</a></p>
          <p className='text-start p-1'><a href="link here">Customer Feedback</a></p>
          <p className='text-start p-1'> <a href="link here">FAQ</a></p>
          <p className='text-start p-1'> <a href="link here">Shipping Policy</a></p>
          <p className='text-start p-1'> <a href="link here">Return & Exchange Policy</a></p>
          <p className='text-start p-1'> <a href="link here">Privacy Policy</a></p>
         </div>
    </div>
    <div className='row bottom-line bg-dark justify-content-between'>
        <div className='col-3 p-2'>
<img src={card1} alt='card1' className='img-fluid' width='300' />
</div>
<div className='col-3 p-2'>
    <p className='h6 text-light'>© Gul Ahmed Textile Mills Limited.</p>
</div>
    </div>
    </div>
  );
}

export default Footer;
