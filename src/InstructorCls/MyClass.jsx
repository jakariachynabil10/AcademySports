import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [instructorCls, setInstructorCls] = useState([]);

  useEffect(() => {
    axiosSecure(`/addClass?email=${user?.email}`)
      .then((data) => {
        console.log(data.data);
        setInstructorCls(data.data);
      });
  }, []);

  const handleStatusChange = (index, value) => {
    console.log(value)
  };

  return (
    <>
      <h1 className="text-center font-bold my-10 text-4xl">Instructor Classes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="border bg-gray-300 bg-opacity-30 font-bold">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Status</th>
              <th>Total Enroll Students</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* Render instructor classes */}
            {instructorCls.map((cls, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{cls.className}</td>
                <td>{cls.instructorName}</td>
                <td>{cls.instructorEmail}</td>
                <td>
                  {cls.status}
                </td>
                <td className="pl-20">{cls.studentsEnrolled}</td>
                <td>
                  <button className="border px-5 py-3 bg-[#0c0769] text-white">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;
