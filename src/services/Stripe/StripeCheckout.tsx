import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';

interface StripeCheckoutProps {
  btnText?: string;
  onClickSubmit?: () => void;
  redirectTo?: string;
  onSubmitError?: (message: string) => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = (props) => {
  const { btnText, onClickSubmit, onSubmitError, redirectTo } = props;

  const handleSubmitPayment = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const stripe = useStripe();
    const elements = useElements();

    // prevent default
    event.preventDefault();

    // guard against invalid stripe and elements
    // NOTE: make sure the stripe and element, stripe loaded the stripe.js script while the element passed the elements information collected from the component safely to be validate by stripe's API
    // See DOC: https://stripe.com/docs/stripe-js/react#useelements-hook

    if (!stripe || !elements) {
      return;
    }

    // Confirm Payment is used to validate a payment intent provided from Stripe Elements, the action performed depends ont he configuration provided. uit can re-route customer on success ad also validates user information provided
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: redirectTo,
      },
    });

    // in case of failure
    if (result.error) {
      console.log(result.error);
      // send confirmation message back to the client
      onSubmitError?.('Error');
    } else {
      // if no errors are caught
      // run the onSubmit methods
      onClickSubmit?.();
    }
  };

  return (
    <form>
      <CardElement />
      <button
        className='stripe__submit-btn'
        disabled={true}
        onClick={handleSubmitPayment}
      >
        {btnText}
      </button>
    </form>
  );
};

export default StripeCheckout;
