import React from "react";
import useCart from "../Hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  const [carts] = useCart();
  const total = carts.reduce((sum, ItemPrice) => sum + ItemPrice.price, 0);
  const price = total.toFixed(2);
  return (
    <>
      <h1 className="font-bold text-center text-3xl mt-10">
        This is the Payment Gateway
      </h1>
    <div>
    <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
     
      {
        carts.map((item , index) => 
      
          <tr key={item._id}>
        <th>{index + 1}</th>
        <td>{item.className}</td>
        <td>${item.price}</td>
      </tr>
         
        )
      }
  
    </tbody>
  </table>
  <hr />
  
      <h1 className="text-end mt-5 me-36"> Total : ${price}</h1>
  
</div>
    </div>
      <Elements stripe={stripeKey}>
        <CheckOutForm carts={carts} price={price}></CheckOutForm>
      </Elements>
    </>
  );
};

export default Payment;
