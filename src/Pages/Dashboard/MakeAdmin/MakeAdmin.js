import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const textFieldHandler = (e) => {
        setEmail(e.target.value);
        // console.log(e.target.value)
    }

    const makeAdminSubmitHandler = (e) => {
        const user = { email: email };
        fetch('http://localhost:5000/users/admin', {

            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                    console.log(data);
                }

            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={makeAdminSubmitHandler}>
                <TextField
                    onBlur={textFieldHandler}
                    type='email'
                    sx={{ mt: 4, width: '50%' }}

                    label=" Email" variant="standard" /><br />
                <Button type='submit' variant='contained' sx={{ px: 3, mt: 4 }}> Make Admin</Button>
            </form>

            {
                success && <Alert severity="success"  >

                    Made Admin Successfully!
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;