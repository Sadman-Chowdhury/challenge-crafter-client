import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import {
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import axiosSecure from "../Api";
import { payment } from "../Api/utils";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const contest = location.state?.contest;
  const { user } = UseAuth();

  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState(" ");
  const [transactionId, setTransactionId] = useState(" ");
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect(() => {
    // Fetch client secret from your backend
    axiosSecure
      .post("/create-payment-intent", { price: contest?.contestPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [contest?.contestPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const billingAddress = form.billingAddress.value;
    const phone = form.phone.value;

    console.log(billingAddress, phone);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    console.log("done 1st");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(" ");
    }

    console.log("done 2nd");

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Unknown",
          },
        },
      });
    console.log("done 3rd");

    if (confirmError) {
      setError(confirmError.message);
    } else {
      setError(" ");
    }
    console.log("done 4th");

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      setPaymentCompleted(true);

      const paymentInfo = {
        transactionId: paymentIntent.id,
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        billingAddress,
        phone,
        status: "success",
        date: new Date(),
        contest,
      };

      const data = await payment(paymentInfo);
      console.log(data);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <div className="max-w-3xl w-full">
        <div className="mb-4 text-right">
          <h1 className="font-bold text-2xl mb-2">Stripe Payment</h1>
          <div className="flex gap-2 text-5xl justify-end">
            <span>
              <FaCcDiscover />
            </span>
            <span>
              <FaCcVisa className="text-blue-400" />
            </span>
            <span>
              <FaCcMastercard className="text-red-700" />
            </span>
            <span>
              <FaCcJcb className="text-cyan-400" />
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:px-16">
            <div className="border-2 border-cyan-700 shadow-md shadow-white bg-white rounded-lg px-2 py-8 lg:w-[705px] h-[350px]">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "22px",
                      color: "#000",
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
              <h1 className="text-cyan-600 mt-6 font-bold underline">
                Other Payment Details
              </h1>
              <div className="mt-2 text-cyan-900 font-bold">
                <label>Billing Address: </label>
                <input
                  type="text"
                  name="billingAddress"
                  placeholder="Billing Address...."
                  className="border-2 border-cyan-700"
                />
                <br />
                <br />
                <label>Customer Phone: </label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number...."
                  className="border-2 border-cyan-700"
                />
                <div className="lg:ml-12 mt-6 flex items-center justify-end">
                  <h2 className="text-red-500">{error}</h2>
                  <h2 className="">
                    <span className="font-bold text-cyan-700">
                      Your TransactionID:
                    </span>
                    <span className="text-purple-600"> {transactionId}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:ml-12 flex items-center justify-end">
            <button
              className="bg-white mb-44 text-black font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out hover:bg-cyan-400 hover:text-white"
              type="submit"
              disabled={!stripe || !clientSecret || paymentCompleted}
            >
              <span className="flex items-center gap-1">
                Pay {contest?.contestPrice}
                <GiPayMoney className="text-xl" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOutForm;
