import * as React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
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
                        path: "/",
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
            },
        ]

    )

    console.log(router);


    return (
        <>
        <main>
            <RouterProvider router={router}/>
        </main>
        </>
    )
}

export default ParentContainer; 