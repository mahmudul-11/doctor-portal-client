import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
const bannerBg = {
    background: `url(${bg})`,



}
const varticalCenter = {
    display: 'flex',

    height: 400,
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...varticalCenter, textAlign: 'left' }} xs={12} md={6} lg={6}>
                    <Box>
                        <Typography variant='h4'>
                            Your New Smile <br />
                            Strats Here
                        </Typography>
                        <Typography variant='h6' sx={{ color: 'text.secondary', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis omnis aut ipsa, nihil ipsam iure dolore nemo illum dolor deleniti!
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#46C7C3' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6} style={varticalCenter}>
                    <img src={chair} style={{ width: '400px', }} alt="" />

                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;