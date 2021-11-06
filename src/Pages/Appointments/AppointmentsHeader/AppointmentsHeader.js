import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Calender/Calender';

const AppointmentsHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Calender date={date} setDate={setDate} ></Calender>
                </Grid>

                <Grid item xs={6} md={6}>
                    <img src={chair} style={{ width: '100%' }} />
                </Grid>


            </Grid>


        </Container>
    );
};

export default AppointmentsHeader;