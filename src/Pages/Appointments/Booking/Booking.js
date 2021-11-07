import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#08a69e' }} gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontSize: 16, fontWeight: 600 }} gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled' }} display="block" gutterBottom>
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button
                        onClick={handleBookingOpen}
                        variant="contained" sx={{ backgroundColor: '#08a69e', fontWeight: 600 }}>Booking Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                openBooking={openBooking} handleBookingClose={handleBookingClose} booking={booking} date={date}
            >

            </BookingModal>
        </>
    );
};

export default Booking;