import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import "./CheckOutForm.css"

import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";

const CheckOutForm = ({carts, price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [,refetch] = useCart()
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");


  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret, 'client Secret');
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type : 'card',
        card,
    })

    if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }

      const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confrim error", confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
    
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status : 'pending',
        availableSeats : carts.map(seat => seat.availableSeats - 1),
        cartItems : carts.map(item => item._id),
        classItems : carts.map(item => item.classItemId),
        classNames : carts.map(name => name.className)
       
      };
      axiosSecure.post('/payment', payment)
      .then(res=>{
        console.log(res.data)
        if (res.data.insertResult.insertedId) {
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Payment is Done',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    
    }


  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
       <div className="lg:ml-36  mt-5">
       <button type="submit" className="border px-7 py-3 rounded-xl bg-green-500 text-white hover:bg-[#485270] "  disabled={!stripe || !clientSecret}>
       Proceed to Payment
        </button>
       </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
