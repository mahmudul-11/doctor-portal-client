import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, loginUser, logOut, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
        console.log(loginData);
    }
    const loginFormSubmitHandler = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6} sx={{ mt: 8 }}>
                <Typography variant='body1' sx={{ fontWeight: 700 }}>
                    Login
                </Typography>
                <form onSubmit={loginFormSubmitHandler}>
                    <TextField id="standard-basic" label="Your Email" variant="standard" sx={{ width: '75%', m: 1 }} name='email' onChange={handleOnChange} />
                    <TextField id="standard-basic" label="Your Password" variant="standard" type='password' sx={{ width: '75%', m: 1 }} name='password' onChange={handleOnChange} />
                    <Button type='submit' variant='contained' sx={{ width: '75%', m: 1, backgroundColor: '#08a69e', mt: 5 }}>Sign In</Button>
                    <NavLink to='/register' style={{ textDecoration: 'none', fontSize: '12px' }}>
                        <Button variant="text">New user? Please Register</Button>
                    </NavLink>
                </form>
                {
                    user?.email && <Alert severity="success"  >

                        User Logged in Successfully!
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

        </Grid>
    );
};

export default Login;