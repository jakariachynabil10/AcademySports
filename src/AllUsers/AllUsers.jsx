import React, { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [disable, setDisable] = useState(true);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const makeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const makeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`).then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Instructor Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const Delete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((data) => {
          console.log(data);
          refetch();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });

    // axiosSecure.delete(`/users/${user._id}`)
    // .then(data => {
    //     console.log(data)
    //     refetch()
    //     if(data.data.deletedCount){
    //         refetch();
    //         Swal.fire({
    //             title: 'Are you sure?',
    //             text: "You won't be able to revert this!",
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'Yes, delete it!'
    //           }).then((result) => {
    //             if (result.isConfirmed) {
    //               Swal.fire(
    //                 'Deleted!',
    //                 'Your file has been deleted.',
    //                 'success'
    //               )
    //             }
    //           })
    //     }
    // })
  };

  return (
    <>
      <h1 className="font-bold text-center text-5xl my-5">ALL USERS</h1>
      <div className="overflow-x-auto  border p-10 w-full h-full rounded-xl shadow-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <>
                      <button
                        disabled={disable}
                        onClick={() => makeAdmin(user)}
                        className="btn btn-ghost bg-[#2a1316] text-white"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user)}
                      className="btn btn-ghost bg-[#2a1316] text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    <>
                      <button
                        disabled={disable}
                        onClick={() => makeInstructor(user)}
                        className="btn btn-ghost bg-[#654f6d] text-white"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => makeInstructor(user)}
                      className="btn btn-ghost bg-[#654f6d] text-white"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => Delete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
