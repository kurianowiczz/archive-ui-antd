import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { useSelector } from 'react-redux';

import { IGlobalState } from '../store';

interface IProtectedRouteProps {
    redirectTo: string;
    invert?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRouteProps & RouteProps> = ({
    redirectTo,
    invert = false,
    ...props
}) => {
    const user = useSelector((state: IGlobalState) => state.users.user);
    const token = localStorage.getItem('token');
    console.log(props.path, !!(user || token));
    return invert !== !!(user || token) ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default ProtectedRoute;
