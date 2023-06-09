import React from "react";
import useCart from "../Hooks/useCart";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaCreditCard, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyClassCart = () => {
  const [carts, refetch] = useCart();
  console.log(carts);
  const [axiosSecure] = useAxiosSecure();


  const handleDelete = cart => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${cart._id}`)
                .then(data => {
                  console.log(data)
                    if (data.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
}
  return (
    <>
      <div className="overflow-x-auto border p-10 w-full rounded-xl shadow-xl">
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
                  <button onClick={()=> handleDelete(cart)} className="btn btn-ghost bg-red-600  text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
                <th>
                  <Link to="/dashboard/payment">
                    <button className="btn btn-ghost bg-green-500 text-white">
                      <FaCreditCard></FaCreditCard>
                    </button>
                  </Link>
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
