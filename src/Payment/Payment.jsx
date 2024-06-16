import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  // =================================================================
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  // =================================================================
  return (
    <section className="text-black">
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
