import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SingleCard = ({ data }) => {
    const [axiosSecure] = useAxiosSecure()
    // const [status, setStatus] = useState('')
  const {
    _id,
    classImg,
    className,
    description,
    price,
    information,
    instructorName,
    availableSeats,
  } = data;

  const handleBtn = (item) =>{
    // setStatus(item)
    axiosSecure.patch(`/updateStatus?status=${item}&id=${_id}`)
    .then(data => {
        console.log(data)
        if (data.data.modifiedCount) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${item}`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })

  }
  console.log(status)



  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={classImg} alt={className} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Description : {description}</p>
          <p>Information : {information}</p>
          <p>Price : ${price}</p>
          <p>Instructor Name : {instructorName}</p>
          <p>Available Seats : {availableSeats}</p>

          <div className="flex justify-center items-center gap-5">
            <button onClick={()=> handleBtn('approved')} className="border px-5 py-3 bg-green-500 text-white rounded-lg">Approved</button>
            <button onClick={()=> handleBtn('deny')} className="border px-5 py-3 bg-red-500 text-white rounded-lg">Deny</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
