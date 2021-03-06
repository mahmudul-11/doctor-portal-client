import { Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import ShowAppointments from '../ShowAppointmnets/ShowAppointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Calender
                    date={date} setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
                <ShowAppointments date={date}></ShowAppointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;