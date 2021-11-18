import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    { id: 1, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: 10, price: 21 },
    { id: 2, name: 'Cosmetic Dentistry', time: '10:05 AM - 11:30 AM', space: 10, price: 20 },
    { id: 3, name: 'Teeth Cleaning', time: '5:00 AM - 6:30 AM', space: 10, price: 19 },
    { id: 4, name: 'Cavity Protection', time: '7:00 AM - 8:30 AM', space: 9, price: 23 },
    { id: 5, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: 11, price: 21 },
    { id: 6, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: 12, price: 25 },
]

const AvailableAppointments = ({ date }) => {
    const [appoinmentSuccessful, setAppoinmentSuccessful] = useState(false);
    return (
        <Container>
            <h2 style={{ color: '#08a69e', fontSize: '30px' }}>Available Appointments on {date.toDateString()}</h2>
            {
                appoinmentSuccessful && <Alert severity="success"  >

                    Appointment Registered Successfully
                </Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id} booking={booking} date={date} setAppoinmentSuccessful={setAppoinmentSuccessful}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;