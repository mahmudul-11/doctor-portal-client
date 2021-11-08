import React from 'react';
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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time, space } = booking;
    const { user } = useAuth();
    const formSubmitHandle = e => {
        alert("Form Data is Submitted..!");
        handleBookingClose();
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
                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                        />

                        <TextField

                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', my: 1 }}
                            id="outlined-size-small"
                            placeholder='Phone Number'
                            size="small"
                        />
                        <TextField
                            disabled
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