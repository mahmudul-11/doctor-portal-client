import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();

    //Page reload korle  jeno log in Page e na nia jay

    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children :
                <Redirect
                    to={{
                        pathname: "/",

                        state: { from: location }
                    }}
                />
            }
        >

        </Route>
    );
};

export default AdminRoute;