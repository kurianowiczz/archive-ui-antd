import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { IGlobalState } from '../store';
import { logOut } from "../store/users/actions";
import { history } from "../router";

interface IProtectedRouteProps {
    redirectTo: string;
    invert?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRouteProps & RouteProps> = ({
    redirectTo,
    invert = false,
    ...props
}) => {
    const dispatch = useDispatch();
    const user = useSelector((state: IGlobalState) => state.users.user);
    if (!!user && user.banned) {
        alert('You have been banned');
        localStorage.setItem('token', '');
        dispatch(logOut());
        history.push('/');
        return null;
    }
    const token = localStorage.getItem('token');
    return invert !== !!(user || token) ? <Route {...props} /> : <Redirect to={redirectTo} />;
};

export default ProtectedRoute;
