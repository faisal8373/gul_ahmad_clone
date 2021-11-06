import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RatingSliderStyle.css';

function RatingSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="row">
      <div className="row justify-content-center  text-center">
        <div className="col-12">
          <h1 className="display-5">LOVED BY CUSTOMERS</h1>
        </div>
      </div>
      <div className="row m-2">
        <Slider {...settings}>
          <div className="p-5">
            <p className="comments text-center">
              "Ordering from the US was extremely convenient and the service
              exceeded my expectation."
            </p>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <p className="pt-3">Huma</p>
          </div>
          <div className=" p-5 ">
           
            <p className="comments text-center">
            "The clothes I received were exactly the same as shown on the website. Excellent delivery service. "
            </p>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            
            <i class="bi bi-star-half"></i>
            <i class="bi bi-star"></i>
            <p className="pt-3">Zarlish</p>
          </div>
          <div className="p-5 ">
          <p className="comments text-center">
          "My experience with GulAhmed has been great. Really appreciate the quality and delivery service! "
            </p>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            
            
            <i class="bi bi-star"></i>
            <p className="pt-3">Anzila Zarif</p>
          </div>
          <div className="p-5">
          <p className="comments text-center">
          "Received my parcel on time. The quality is great. I will always buy from GulAhmed Ideas now. "
            </p>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <p className="pt-3">Samya</p>
          </div>
          <div className="p-5">
          <p className="comments text-center">
          "Delighted to receive my parcel on time! Very nice suits and quality stuff. Thank you GulAhmed "
            </p>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            
            <p className="pt-3">Daniyal Aman</p>
          </div>
          <div className="p-5">
          <p className="comments text-center">
          "Fabric quality is one of Ideas biggest strengths! Highly satisfied with the products :D"</p>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>           
            <i class="bi bi-star"></i>
            <p className="pt-3">Waneeza Blogs</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default RatingSlider;
