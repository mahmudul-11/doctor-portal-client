import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentsHeader from '../AppointmentsHeader/AppointmentsHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <>
            <Navigation></Navigation>
            <AppointmentsHeader date={date} setDate={setDate} />
            <AvailableAppointments date={date} />

        </>
    );
};

export default Appointments;