import React from "react";
import useCart from "../Hooks/useCart";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";

const MyClassCart = () => {
  const [carts, refetch] = useCart();
  console.log(carts);
  const total = carts.reduce((sum, ItemPrice) => ItemPrice.price + sum, 0);
  const [axiosSecure] = useAxiosSecure();
  return (
    <>
      <div className="overflow-x-auto border p-10 w-full h-full rounded-xl shadow-xl">
        <h1 className="text-center font-bold text-5xl my-5">My Classes</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Information</th>
              <th></th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => (
              <tr key={cart._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{cart.className}</div>
                    </div>
                  </div>
                </td>
                <td>{cart.email}</td>
                <td>${cart.price}</td>
                <td>{cart.description}</td>
                <th>
                  <button className="btn btn-ghost bg-red-600  text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
                <th>
                  <button className="btn btn-ghost bg-green-500">
                    <FaCreditCard></FaCreditCard>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClassCart;
