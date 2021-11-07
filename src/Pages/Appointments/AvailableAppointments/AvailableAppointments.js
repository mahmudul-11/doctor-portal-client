import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    { id: 1, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: 10 },
    { id: 2, name: 'Cosmetic Dentistry', time: '10:05 AM - 11:30 AM', space: 10 },
    { id: 3, name: 'Teeth Cleaning', time: '5:00 AM - 6:30 AM', space: 10 },
    { id: 4, name: 'Cavity Protection', time: '7:00 AM - 8:30 AM', space: 10 },
    { id: 5, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: 10 },
    { id: 6, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', space: 10 },
]

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <h2 style={{ color: '#08a69e', fontSize: '30px' }}>Available Appointments on {date.toDateString()}</h2>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id} booking={booking} date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;