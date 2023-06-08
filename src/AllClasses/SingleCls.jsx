import React from "react";

const SingleCls = ({ singleCls }) => {
  const {
    classImg,
    className,
    description,
    price,
    information,
    instructorName,
    availableSeats,
  } = singleCls;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
      <figure>
        <img
          src={classImg}
          className="h-[300px]"
          alt={className}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Description : {description}</p>
        <p>Information : {information}</p>
        <p>Price : ${price}</p>
        <p>Instructor Name : {instructorName}</p>
        <p>Available Seats : {availableSeats}</p>
        <div className="card-actions justify-end">
        <button className="px-8 py-3  bg-[#0c0769] text-white rounded-md">
         Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCls;
