import { Alert, AlertTitle, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, loginUser, logOut, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
        console.log(newData);
    }
    const loginFormSubmitHandler = e => {
        if (loginData.password !== loginData.password2) {
            alert("Two Password Does not Matched..!");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6} sx={{ mt: 8 }}>
                <Typography variant='body1' sx={{ fontWeight: 700 }}>
                    Register
                </Typography>
                {
                    isLoading ? <CircularProgress />
                        :
                        <form onSubmit={loginFormSubmitHandler}>
                            <TextField id="standard-basic" label="Your Name" variant="standard" sx={{ width: '75%', m: 1 }} name='name' onBlur={handleOnBlur} />
                            <TextField id="standard-basic" label="Your Email" variant="standard" sx={{ width: '75%', m: 1 }} name='email' onBlur={handleOnBlur} />

                            <TextField id="standard-basic" label="Your Password" variant="standard" type='password' sx={{ width: '75%', m: 1 }} name='password' onBlur={handleOnBlur} />

                            <TextField id="standard-basic" label="Your Password" variant="standard" type='password' sx={{ width: '75%', m: 1 }} name='password2' onBlur={handleOnBlur} />

                            <Button type='submit' variant='contained' sx={{ width: '75%', m: 1, backgroundColor: '#08a69e', mt: 5 }}>Register</Button>

                            <NavLink to='/login' style={{ textDecoration: 'none' }}>
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>
                }
                {
                    user?.email && <Alert severity="success"  >

                        User Created Successfully!
                    </Alert>
                }
                {
                    authError && <Alert severity="error">

                        {authError}
                    </Alert>
                }



            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <img src={login} style={{ width: '100%' }} />
            </Grid>

        </Grid >
    );
};

export default Register;