import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';



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
        element: <Profile></Profile>
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
        element: <Password></Password>
    },
])

export default function App(){
    return(
        <main>
            <RouterProvider router={router}> </RouterProvider>
        </main>
    )
}