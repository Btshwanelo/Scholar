import { Dashboard, Notfound, Records, SignIn, SignUp } from "../pages";

export const appRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        component: <Dashboard />
    },
{
        path: '/signin',
        name: 'Signin',
        component: <SignIn />
},
    {
        path: '/signup',
        name: 'Signup',
        component: <SignUp />
    },
    {
        path: '/records',
        name: 'Records',
        component: <Records />
    },
    {
        path: '*',
        name: 'Notfound',
        component: <Notfound />
    },
];
