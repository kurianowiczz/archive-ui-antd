import React, {useEffect} from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Routes from './constants/routes';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './screens/Home/Home';
import UploadFile from './screens/Upload/Upload';
import SignUpFrom from './screens/SignUp/SignUp';
import SignInFrom from './screens/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { setUpApp } from './store/users/actions';
import Account from './screens/Account/Account';
import { IGlobalState } from "./store";
import Admin from "./screens/Admin/Admin";

export const history = createBrowserHistory();

export default () => {
    const user = useSelector((state: IGlobalState) => state.users.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setUpApp());
    }, []);

    return (
        <Router history={history}>
            <Switch>
                <ProtectedRoute path={Routes.UPLOAD.path} component={UploadFile} redirectTo={'/'} />
                <ProtectedRoute path={Routes.ACCOUNT.path} component={Account} redirectTo={Routes.SIGN_IN.path}/>
                <ProtectedRoute invert path={Routes.SIGN_UP.path} component={SignUpFrom} redirectTo={Routes.UPLOAD.path}/>
                <ProtectedRoute invert path={Routes.SIGN_IN.path} component={SignInFrom} redirectTo={Routes.UPLOAD.path}/>
                {
                    user && user.role === 'Admin' ? (
                        <ProtectedRoute path={Routes.ADMIN.path} component={Admin} redirectTo={Routes.SIGN_IN.path} />
                    ) : null
                }
                <Route path={'/'} component={Home} exact/>
                <Redirect to={!!user ? '/upload' : '/'}/>
            </Switch>
        </Router>
    )
}
