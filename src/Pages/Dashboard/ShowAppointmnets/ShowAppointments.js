import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ShowAppointments = ({ date }) => {
    const { user } = useAuth();
    const [appointmnets, setAppointmnets] = useState([]);
    const newDate = date.toLocaleDateString();
    // console.log(newDate);
    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${newDate}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointmnets(data));
    }, [date])
    return (
        <div>
            <Typography variant='h4' sx={{ fontWeight: 700, mb: 3, color: 'green', textAlign: 'center' }}>
                Appointments: {appointmnets.length}
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#08a69e' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} >Name</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} align="center">Customer Email</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointmnets.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.serviceName}
                                </TableCell>
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell align="center"><IconButton sx={{ color: 'error.main' }} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};

export default ShowAppointments;