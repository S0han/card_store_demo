import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;
    }

    return (
        <form onSubmit={paymentHandler}>
            <CardElement />
            <button onClick={null}>CONFIRM PURCHASE</button>
        </form>
    )
}

export default PaymentForm;