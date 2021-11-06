import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogStyle.css";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import Blog5 from "../../assets/blogs/blog5.jpg";
import Blog6 from "../../assets/blogs/blog6.jpg";

function BlogSlider() {
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
          <h1 className="display-5">ALL THAT’S NEW</h1>
          <a href="google.com" className="links">
            VIEW ALL BLOGS
          </a>
        </div>
      </div>
      <div className="row m-2">
        
        <Slider {...settings}>
          <div className="p-5">
            <img className="img-fluid rounded" src={Blog1} alt="...." />
            <div className="m-3 pb-3">
              <p className="h6 text-end">October 09, 2021 </p>
            </div>
            <a href="#some link" className="h3 links">
              Time For Some #WinterAction
            </a>
            <p className="pt-2 text-center">
              Winter is almost here and many of us have already entered the
              ‘fan-only’ phase at night. Speaking of phases, the transition from
              summer to winter…
            </p>
            <a href="#some link" className=" ">
              Read More
            </a>
          </div>
          <div className=" p-5 ">
            <img src={Blog2} alt="...." />
            <div className="m-3 pb-3">
              <p className="h6 text-end">October 09, 2021 </p>
            </div>
            <a href="#some link" className=" links h3">
              Find Your New Season Look
            </a>
            <p className="pt-2 text-center">
              “Men aren’t concerned with how ugly or mundane their winter gear
              looks as long as it serves its basic purpose which is apparently
              to keep the…
            </p>
            <a href="#some link" className=" h6">
              Read More
            </a>
          </div>
          <div className="p-5 ">
            <img src={Blog3} alt="...." />
            <div className="m-3 pb-3">
              <p className="h6 text-end">October 09, 2021 </p>
            </div>
            <a href="#some link" className=" links h3">
              Floor Couture
            </a>
            <p className="pt-2 text-center">
              What a nice pair of stilettos do for an outfit is what a rug does
              for a room. They are a game changer on how a room looks and feels.
              Rugs can either…
            </p>
            <a href="#some link" className=" h6">
              Read More
            </a>
          </div>
          <div className="p-5">
            <img src={Blog4} alt="...." />
            <div className="m-3 pb-3">
              <p className="h6 text-end">October 09, 2021 </p>
            </div>
            <a href="#some link" className=" links h3">
              Why Wear Cambric?
            </a>
            <p className="pt-2 text-center">
              With the midsummer celebrations around the corner, there’s an air
              of excitement and enthusiasm everywhere around us. The positive
              vibes have…
            </p>
            <a href="#some link" className="h6">
              Read More
            </a>
          </div>
          <div className="p-5">
            <img src={Blog5} alt="...." />
            <div className="m-3 pb-3">
              <p className="h6 text-end">October 09, 2021 </p>
            </div>
            <a href="#some link" className=" links h3">
              Best Lawn Kurtis Under Rs.2,500
            </a>
            <p className="pt-2 text-center">
              The heat wave blowing with all its might across the country can
              only mean one thing. It’s time to hit the refresh button on your
              wardrobes. It…
            </p>
            <a href="#some link" className=" h6">
              Read More
            </a>
          </div>
          <div className="p-5">
            <img src={Blog6} alt="...." />
            <div className="m-3 pb-3">
              <p className="h6 text-end">October 09, 2021 </p>
            </div>
            <a href="#some link" className=" links h3">
              Every Woman Needs A Black Lawn Suit
            </a>
            <p className="pt-2 text-center">
              There’s something utterly uncanny about the perfection that the
              color black exudes, which makes it the ultimate queen of colors.
              And, that’s…
            </p>
            <a href="#some link" className=" h6">
              Read More
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BlogSlider;
