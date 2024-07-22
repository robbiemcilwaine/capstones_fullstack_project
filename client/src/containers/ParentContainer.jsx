import * as React from 'react';
import Button from '@mui/material/Button';
import NavigationComponent from '../components/NavigationComponent';
import { CssBaseline, Container, Typography } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import Map from '../components/Map';
import DeliveriesContainer from './DeliveriesContainer';


const ParentContainer = () => {

    const router = createBrowserRouter(

        [
            {
                path: "/",
                element: <NavigationComponent />,
                children: [
                    {
                        path: "/home",
                        element: <HomeContainer />
                    },
                    {
                        path: "/map",
                        element: <Map />
                    },
                    {
                        path: "/deliveries",
                        element: <DeliveriesContainer />
                    }
                ]
            }
        ]

    )


    return (
        <>
        <RouterProvider router={router} />
        </>
    )
}

export default ParentContainer; 