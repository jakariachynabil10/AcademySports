import React from "react";
import coach from "../../public/Image/coach-football.png";
import heart from "../../public/Image/heart.png";
import crossShield from "../../public/Image/cross-shield-1.png";
import target from "../../public/Image/target.png";

const WhatDose = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-10">
        Improve the Game by Focusing on <br /> Key Elements
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 ml-24  mt-10">
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={coach} className="w-[80px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Experience Coaching</h2>
            <p className="pb-5 px-5">Coaching is a form of development in which an experienced person, called a coach, supports a learner</p>
          </div>
        </div>
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={heart} className="w-[80px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title px-5">Mental Stability</h2>
            <p className="pb-5 px-5">Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities</p>
           
          </div>
        </div>
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={crossShield} className="w-[80px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Controlled Recovery</h2>
            <p className="pb-5 px-5">normal state of health, mind, or strength; recovery as the action or process of regaining possession of control</p>
            
          </div>
        </div>
        <div className="card card-compact w-[250px] my-5 lg:my-0  bg-base-100 shadow-xl">
          <figure>
            <img src={target} className="w-[80px]" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title px-5">Cultural Activities</h2>
            <p className="pb-5 px-5">Activities which embody or convey cultural expressions, irrespective of the commercial value they may have. </p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDose;
