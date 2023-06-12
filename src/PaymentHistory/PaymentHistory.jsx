import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axiosSecure("/payment").then((data) => {
      setPayments(data.data);
    });
  }, []);
  return (
    <>
      <div className="overflow-x-auto mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Class Name</th>
              <th>Student Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Transition ID</th>
            </tr>
          </thead>
          <tbody>
          {payments.map((payment, index) => (
            <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>
                {payment.classNames.map((name, nameIndex) => (
                  <div key={nameIndex}>{name}</div>
                ))}
              </td>
              <td>{payment.email}</td>
              <td>{payment.date}</td>
              <td>${payment.price}</td>
              <td>{payment.transactionId}</td>
            </tr>
          ))}
          </tbody>
          s
        </table>
      </div>
    </>
  );
};

export default PaymentHistory;
