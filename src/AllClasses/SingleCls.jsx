import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";

const SingleCls = ({ singleCls }) => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [,refetch] = useCart()
  const navigate = useNavigate();
  const location = useLocation();

  const {
    _id,
    classImg,
    className,
    description,
    price,
    information,
    instructorName,
    availableSeats,
    studentsEnrolled
  } = singleCls;

  const handleToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        className,
        classImg,
        description,
        information,
        price,
        availableSeats,
        instructorName,
        email: user.email,
      };
      axiosSecure.post("/carts", cartItem).then((data) => {
        console.log(data);
        if (data.data.insertedId) {
          refetch()
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Classes added on the cart.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        else{
          Swal.fire({
            title: 'Please login to Confirm Your Class',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
        }
      });
    }
  };

  return (
    <div className="card card-compact  bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300">
      <figure>
        <img src={classImg} className="h-[300px]" alt={className} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Description : {description}</p>
        <p>Information : {information}</p>
        <p>Price : ${price}</p>
        <p>Instructor Name : {instructorName}</p>
        <p>Available Seats : {availableSeats}</p>
        <p>Students Enrolled : {studentsEnrolled || 0}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleToCart(singleCls)}
            className="px-8 py-3  bg-[#0c0769] text-white rounded-md"
          >
            Add to Class Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCls;
