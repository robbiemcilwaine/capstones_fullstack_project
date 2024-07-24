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

   
    const [deliveryByPostalDistrict, setDeliveryByPostalDistrict] = React.useState(null);


    const fetchAllDeliveries = async () => {
        const response = await fetch("http://localhost:8080/deliveries");
        const deliveryData = await response.json();
        setDeliveryData(deliveryData);
    }

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

    const fetchDeliveryByPostalDistrict = async (postalDistrict) => {
        const response = await fetch(`http://localhost:8080/deliveries/postalDistrict/${postalDistrict}`);
        console.log("this is the response",response);
        const deliveryDataByPostcode = await response.json();
        console.log("this is delivery data",deliveryDataByPostcode)
        setDeliveryByPostalDistrict(
            (prevState) => ({
                ...prevState,
                [postalDistrict]: [deliveryDataByPostcode]}
        ));
    }

    React.useEffect(() => {
        fetchDeliveryByPostalDistrict("HD1")
        fetchDeliveryByPostalDistrict("HD2")
        fetchDeliveryByPostalDistrict("HD3")
        fetchDeliveryByPostalDistrict("HD4")
        fetchDeliveryByPostalDistrict("HD5")
        fetchDeliveryByPostalDistrict("HD6")
        fetchDeliveryByPostalDistrict("HD7")
        fetchDeliveryByPostalDistrict("HD8")
        fetchDeliveryByPostalDistrict("HD9")
    }, [])


    console.log("this is all deleviers in a key - valuepair", deliveryByPostalDistrict)

   
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