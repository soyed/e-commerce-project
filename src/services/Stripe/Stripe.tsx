import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// This is a stripe object
const stripePromise = loadStripe(process.env.STRIPE_KEY);

// Elements providers allows the use of the available strip elements component and stripe objects
// elements components are features like => cardElement, CVVElement which are basically the different pre-built component that can be used to carry out a transaction

const Stripe: React.FC = (props) => {
  const { children } = props;

  const options = {
    // TODO: send client secret from backend
    clientSecret: 'CLIENT_SECRET',
  };
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default Stripe;
