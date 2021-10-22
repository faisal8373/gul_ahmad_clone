import React from "react";
import unstichedWomen from "../../assets/categories/unstitched-1.jpg";
import ideasPret from '../../assets/categories/ideas-pret.jpg';
import kids from '../../assets/categories/kids.jpg';
import home from '../../assets/categories/home.jpg';
import salt from '../../assets/categories/salt.jpg';
import men from '../../assets/categories/men.jpg';
import shoes from '../../assets/categories/shoes.jpg';
import bags from '../../assets/categories/bags.jpg';
import menUnstitched from '../../assets/categories/mens-unstitiched.jpg';



function SingleCategory() {
  return (
    <div >
      <div className="row gx-0 justify-content-center mt-4">
        <div className="col-5">
          <img className="img-fluid" src={unstichedWomen} width='100%' alt="..." />
        </div>
        <div className="col-5 align-self-center">
          <p className="h1">UNSTITCHED</p>
          <p className="h5">Shop Now</p>
        </div>
      </div>
      <div className="row gx-0 justify-content-center">
        
        <div className="col-5 align-self-center">
          <p className="h1">IDEAS PRET</p>
          <p className="h5">Shop Now</p>
        </div>
        <div className="col-5 ">
          <img className="img-fluid" src={ideasPret} width='100%' alt="..." />
        </div>
      </div>
      
      <div className="row gx-0 justify-content-center  ">
        <div className="col-5">
          <img className="img-fluid" src={kids} width='100%' alt="..." />
        </div>
        <div className="col-5 align-self-center">
          <p className="h1">KIDS</p>
          <p className="h5">Shop Now</p>
        </div>
      </div>
      <div className="row gx-0 justify-content-center  ">
        
        <div className="col-5 align-self-center">
          <p className="h1">IDEAS HOME</p>
          <p className="h5">Shop Now</p>
        </div>
        <div className="col-5 ">
          <img className="img-fluid" src={home} width='100%' alt="..." />
        </div>
      </div>
      <div className="row gx-0 justify-content-center ">
        <div className="col-5">
          <img className="img-fluid" src={salt} width='100%' alt="..." />
        </div>
        <div className="col-5 align-self-center">
          <p className="h1">SALT</p>
          <p className="h5">Shop Now</p>
        </div>
      </div>
      <div className="row gx-0 justify-content-center  ">
        
        <div className="col-5 align-self-center">
          <p className="h1">MEN'S APPAREL</p>
          <p className="h5">Shop Now</p>
        </div>
        <div className="col-5 ">
          <img className="img-fluid" src={men} width='100%' alt="..." />
        </div>
      </div>
      <div className="row gx-0 justify-content-center ">
        <div className="col-5">
          <img className="img-fluid" src={shoes} width='100%' alt="..." />
        </div>
        <div className="col-5 align-self-center">
          <p className="h1">SHOES</p>
          <p className="h5">Shop Now</p>
        </div>
      </div>
      <div className="row gx-0 justify-content-center  ">
        
        <div className="col-5 align-self-center">
          <p className="h1">BAGS</p>
          <p className="h5">Shop Now</p>
        </div>
        <div className="col-5 ">
          <img className="img-fluid" src={bags} width='100%' alt="..." />
        </div>
      </div>
      <div className="row gx-0 justify-content-center ">
        <div className="col-5">
          <img className="img-fluid" src={menUnstitched} width='100%' alt="..." />
        </div>
        <div className="col-5 align-self-center">
          <p className="h1">MEN'S UNSTITCHED</p>
          <p className="h5">Shop Now</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
