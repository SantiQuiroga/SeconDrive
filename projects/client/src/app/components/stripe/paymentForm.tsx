import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [setIsCardComplete] = useState(false);
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [expiryComplete, setExpiryComplete] = useState(false);
  const [cvcComplete, setCvcComplete] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const cardElement = elements.getElement(CardNumberElement);

    const { error: cardError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

    if (cardError) {
      setErrorMessage(cardError.message);
      setLoading(false);
      return;
    }

    const { id } = paymentMethod;
    try {
      const response = await fetch('http://localhost:3000/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          amount: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      const data = await response.json();
      console.log(data);
      cardElement.clear();
      setErrorMessage('Payment successful!');
    } catch (error) {
      setErrorMessage('Payment failed. Please try again.');
      console.error(error);
    }
    setLoading(false);
  };

  const handleCardNumberChange = event => {
    setCardNumberComplete(event.complete);
  };

  const handleExpiryChange = event => {
    setExpiryComplete(event.complete);
  };

  const handleCvcChange = event => {
    setCvcComplete(event.complete);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-8'>
      <div
        className='border p-4 rounded-md custom-border'
        style={{ borderWidth: '2px', borderColor: 'black' }}
      >
        <div className='mb-4'>
          <label className='block mb-2'>Card Number</label>
          <CardNumberElement
            onChange={handleCardNumberChange}
            options={{
              showIcon: true,
              iconStyle: 'solid', // or 'default'
            }}
            className='border p-2 w-full'
          />
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <label className='block mb-2'>Expiration Date</label>
            <CardExpiryElement
              onChange={handleExpiryChange}
              className='border p-2 w-full'
            />
          </div>
          <div>
            <label className='block mb-2'>CVC</label>
            <CardCvcElement
              onChange={handleCvcChange}
              className='border p-2 w-full'
            />
          </div>
        </div>
        {errorMessage && (
          <div className='text-red-500 mb-4'>{errorMessage}</div>
        )}
        <div className='flex justify-center'>
          <button
            disabled={
              !stripe ||
              loading ||
              !(cardNumberComplete && expiryComplete && cvcComplete)
            }
            className={`px-4 py-2 rounded text-white ${
              !stripe ||
              loading ||
              !(cardNumberComplete && expiryComplete && cvcComplete)
                ? 'bg-blue-200'
                : 'bg-blue-500 hover:bg-blue-600 focus:outline-none'
            }`}
          >
            {loading ? 'Processing...' : 'Submit Payment'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
