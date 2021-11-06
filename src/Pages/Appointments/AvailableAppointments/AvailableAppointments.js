import React from 'react';

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            <h4>Appointment Date is {date.toDateString()}</h4>
        </div>
    );
};

export default AvailableAppointments;