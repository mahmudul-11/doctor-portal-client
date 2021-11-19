import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JwdeCBPgf4ab0Hd1ZP301cEINKgm9MiFjJsHVvTZwoTP9TwvuRKk6wvC56ANtMRr9ygWcdTtFHjB5t4Sz45E7fQ00CgFyDWkE');
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointmnet] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointmnet(data));
    }, [appointment])
    return (
        <div>
            <h3>Service Name: {appointment.serviceName} </h3>
            <h5>Patient Name: {appointment.patientName} </h5>
            <h5>Date: {appointment.date} </h5>
            <h5>Time: {appointment.time} </h5>
            <h4>Fee:  ${appointment.price} </h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment}></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;