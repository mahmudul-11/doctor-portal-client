import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import appointBannerImg from '../.../../../../images/doctor.png'
import bg from '../.../../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';
const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(46, 35, 57,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'center'
}
const AppointmentBanner = () => {
    return (
        <Container style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={5}>
                    <img style={{ width: 400, marginTop: -150 }}
                        src={appointBannerImg} alt="" />
                </Grid>
                <Grid item xs={12} md={6} lg={7} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }} style={{ textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h6' sx={{}} style={{ color: '#46C7C3', fontWeight: '700' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{ mt: 3 }} style={{ color: 'white', }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ color: 'white', fontSize: 14 }} variant='h6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo cumque possimus mollitia dolorem aperiam voluptatibus nihil qui perspiciatis natus.
                        </Typography>
                        <Button variant="contained" sx={{}} style={{ backgroundColor: '#46C7C3' }}> Learn More</Button>
                    </Box>

                </Grid>

            </Grid>
        </Container >
    );
};

export default AppointmentBanner;