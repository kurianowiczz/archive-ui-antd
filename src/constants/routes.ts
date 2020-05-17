const Routes = {
    UPLOAD: {
        path: '/upload',
        roles: ['User', 'Admin'],
        icon: 'upload',
        label: 'Upload'
    },
    SIGN_UP: {
        path: '/signup',
        roles: ['User', 'Admin'],
        icon: 'signup',
        label: 'Signup'
    },
    SIGN_IN: {
        path: '/signin',
        roles: ['User', 'Admin'],
        icon: 'signin',
        label: 'Signin'
    },
    ACCOUNT: {
        path: '/account',
        roles: ['User', 'Admin'],
    },
    ADMIN: {
        path: '/admin',
        roles: ['Admin'],
        icon: 'user',
        label: 'Admin page'
    }
};

export const menu = [
    Routes.UPLOAD,
    Routes.ADMIN
];

export default Routes;
