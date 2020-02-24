import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Routes from './constants/routes';
import Upload from './screens/Upload/Upload';
import SignUpFrom from "./screens/SignUp/SignUp";
import SignInFrom from "./screens/SignIn/SignIn";

export const history = createBrowserHistory();

export default () => (
<Router history={history}>
    <Switch>
        <Route path={Routes.UPLOAD.path} component={Upload} />
        <Route path={Routes.SIGN_UP.path} component={SignUpFrom} />
        <Route path={Routes.SIGN_IN.path} component={SignInFrom} />
    </Switch>
</Router>
)
