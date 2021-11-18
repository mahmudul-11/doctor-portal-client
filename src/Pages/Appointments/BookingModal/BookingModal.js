import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setAppoinmentSuccessful }) => {
    const { name, time, space, price } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo); // modal ta state update er jonno

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
        // console.log(newInfo);
    }

    const formSubmitHandle = e => {

        const appoinmnet = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // console.log(appoinmnet);
        //send data to the server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinmnet)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAppoinmentSuccessful(true);
                    handleBookingClose();
                }
            })


        e.preventDefault();
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" sx={{ textAlign: 'center', color: '#08a69e', fontWeight: 600 }} variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={formSubmitHandle}>
                        <TextField
                            disabled
                            label='Time slot'
                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            label='Your name'
                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            name="patientName" onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />

                        <TextField
                            label='Your Email'
                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            name="email" onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            name="price" onBlur={handleOnBlur}
                            defaultValue={price}
                            label='Price in $'
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            name="phone" onBlur={handleOnBlur}
                            label='Your Phone Number'
                            size="small"
                        />
                        <TextField
                            disabled
                            label='Reservation Date'
                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button type='submit' variant='contained' sx={{ backgroundColor: '#08a69e' }}>Send</Button>
                        </Box>
                    </form>
                </Box>
            </Fade>
        </Modal >
    );
};

export default BookingModal;