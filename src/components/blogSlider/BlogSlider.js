import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BlogStyle.css';
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import Blog5 from "../../assets/blogs/blog5.jpg";
import Blog6 from "../../assets/blogs/blog6.jpg";



function BlogSlider() {
  const settings = {
    dots: true,
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
          <h1 className="display-5">ALL THAT’S NEW</h1>
          <a href="google.com" className="">
            VIEW ALL BLOGS
          </a>
        </div>
      </div>
      <div className="row justify-content-between m-5">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="col-4">
            <img src={Blog1} alt="...." />
            <p className='h6 text-align-left' >October 09, 2021 </p>
            <h3>1</h3>
          </div>
          <div className="col-4">
            <img src={Blog2} alt="...." />
            <p className='h6 text-align-left' >October 09, 2021 </p>
            <h3>1</h3>
          </div>
          <div className="col-4">
            <img src={Blog3} alt="...." />
            <p className='h6 text-align-left' >October 09, 2021 </p>
            <h3>1</h3>
          </div>
          <div className="col-4">
            <img src={Blog4} alt="...." />
            <p className='h6 text-align-left' >October 09, 2021 </p>
            <h3>1</h3>
          </div>
          <div className="col-4">
            <img src={Blog5} alt="...." />
            <p className='h6 text-align-left' >October 09, 2021 </p>
            <h3>1</h3>
          </div>
          <div className="col-4">
            <img src={Blog6} alt="...." />
            <p className='h6 text-align-left' >October 09, 2021 </p>
            <h3>1</h3>
          </div>
        </Slider>
      </div>
      
    </div>
  );
}

export default BlogSlider;
