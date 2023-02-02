import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';

import { AuthorizeUser,ProtectRoute } from './middleware/auth';
const router = createBrowserRouter([
    {
        path :'/',
        element: <Username></Username>
    },
    {
        path : '/register',
        element: <Register></Register>
    },
    {
        path : '/profile',
        element: <AuthorizeUser> <Profile/></AuthorizeUser>
    },
    {
        path : '/recovery',
        element: <Recovery></Recovery>
    },
    {
        path : '/reset',
        element: <Reset></Reset>
    },
    {
        path : '*', // * refer other route which are not exist in out Application( invalid route )
        element: <PageNotFound></PageNotFound>
    },
    {
        path : '/password',
        element: <ProtectRoute> <Password/> </ProtectRoute>
    },
])

export default function App(){
    return(
        <main>
            <RouterProvider router={router}> </RouterProvider>
        </main>
    )
}