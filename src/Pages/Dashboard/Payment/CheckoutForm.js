import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const { price } = appointment;
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message)
        }
        else {
            setError('');
            console.log(paymentMethod);
        }


    }
    return (
        <div style={{ padding: '0 30px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '10px' }}>
            <h4 style={{ paddingTop: '15px', color: '#1A76D2' }}> PayWith Card</h4>
            <form onSubmit={handleSubmit} style={{ padding: "30px 0" }}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',

                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button variant='container' sx={{ backgroundColor: '#1A76D2', color: 'white' }} type="submit" disabled={!stripe}>
                    Pay ${price}
                </Button>
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }

        </div>
    );
};

export default CheckoutForm;