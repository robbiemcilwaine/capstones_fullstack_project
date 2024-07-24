import * as React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { RouterProvider, createBrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardContainer from './DashboardContainer' 
import UnassignedDeliveriesContainer from './UnassignedDeliveriesContainer';
import OurMapContainer from './OurMapContainer';

const ParentContainer = () => {

    const [deliveryData, setDeliveryData] = React.useState([]);
    const [waypointData, setWaypointData] = React.useState([]);
    const [postalDistrict, setPostalDistrict] = React.useState('HD1');

    const fetchAllDeliveries = async () => {
        const response = await fetch("http://localhost:8080/deliveries");
        const deliveryData = await response.json();
        setDeliveryData(deliveryData);
    }

    // const fetchAllWaypoints = async () => {
    //     const response = await fetch("http://localhost:8080/waypoints");
    //     const waypointData = await response.json();
    //     setWaypointData(waypointData);
    // }

    const fetchWaypointByPostalDistrict = async (postalDistrict) => {
        const response = await fetch(`http://localhost:8080/deliveries/postalDistrict/${postalDistrict}`);
        const deliveryData = await response.json();
        const waypoints = deliveryData.map(delivery => ({
            lat: delivery.waypoint.latitude,
            lng: delivery.waypoint.longitude
        }));
        setWaypointData(waypoints);
    }

    React.useEffect(() => {
        fetchWaypointByPostalDistrict(postalDistrict); 
    }, [postalDistrict])

    React.useEffect(() => {
        fetchAllDeliveries();
    },[])

    const router = createBrowserRouter(

        [
            {
                path: "/",
                element: <NavigationComponent />,
                children: [
                    {
                        path: "/",
                        element: <DashboardContainer deliveryData={deliveryData}/>
                    },
                    {
                        path: "/map",
                        element: <OurMapContainer waypointData={waypointData} setPostalDistrict ={setPostalDistrict}/>
                    },
                    {
                        path: "/deliveries",
                        element: <UnassignedDeliveriesContainer waypointData={waypointData}/>
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