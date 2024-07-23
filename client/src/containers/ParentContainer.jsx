import * as React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import DeliveriesContainer from './DeliveriesContainer';
import OurMapContainer from './OurMapContainer';

const ParentContainer = () => {

    const [deliveryData, setDeliveryData] = React.useState([]);
    const [waypointData, setWaypointData] = React.useState([]);
    const [routeData, setRouteData] = React.useState([]);

    const fetchAllDeliveries = async () => {
        const response = await fetch("http://localhost:8080/deliveries");
        const deliveryData = await response.json();
        setDeliveryData(deliveryData);
    }

    const fetchAllWaypoints = async () => {
        const response = await fetch("http://localhost:8080/waypoints");
        const waypointData = await response.json();
        setWaypointData(waypointData);
    }

    React.useEffect(() => {
        fetchAllDeliveries();
        fetchAllWaypoints();
    }, [])

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
                        element: <OurMapContainer/>
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