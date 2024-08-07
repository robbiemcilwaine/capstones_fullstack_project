import {useState, useEffect} from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import DashboardContainer from './DashboardContainer' 
import DeliveriesContainer from './DeliveriesContainer';
import OurMapContainer from './OurMapContainer';
import ResponsiveLayout from '../components/ResponsiveLayout';

const ParentContainer = () => {

    const [deliveryData, setDeliveryData] = useState([]);
    const [waypointData, setWaypointData] = useState([]);
    const [postalDistrict, setPostalDistrict] = useState('HD1');
    const [allWayPointData, setAllWayPointData] = useState([]);
    const [routeData, setRouteData] = useState({});   
    const [deliveryByPostalDistrict, setDeliveryByPostalDistrict] = useState({});
    const [waypointsTestv2, setWaypointsTestV2] = useState({});

    const fetchRouteData= async () => {
        const response = await fetch("http://localhost:8080/routes");
        const routeData = await response.json();
        setRouteData(routeData);
    }


    const fetchAllDeliveries = async () => {
        const response = await fetch("http://localhost:8080/deliveries");
        const deliveryData = await response.json();
        setDeliveryData(deliveryData);
    }

    const fetchAllWaypoints = async () => {
        const response = await fetch("http://localhost:8080/waypoints");
        const allWayPointData = await response.json();
        setAllWayPointData(allWayPointData);
    }

    const fetchRoutesByPostalDistrict = async (postalDistrict) => {
        const response = await fetch(`http://localhost:8080/routes/${postalDistrict}`);
        const routesDataForPostalDistrict = await response.json();
        setWaypointsTestV2(routesDataForPostalDistrict);
    }



 //this is the method that was edited 
    const fetchWaypointByPostalDistrict = async (postalDistrict) => {
        const response = await fetch(`http://localhost:8080/waypoints/postalDistrict/${postalDistrict}`);
        const waypointData = await response.json();
        const waypoints = waypointData.map(waypoint => ({
            lat: waypoint.latitude,
            lng: waypoint.longitude
        }));
        setWaypointData(waypoints);
    }


    useEffect(() => {
        fetchWaypointByPostalDistrict(postalDistrict); 
    }, [postalDistrict])

    useEffect(() => {
        fetchAllDeliveries();
        fetchAllWaypoints();
        fetchRouteData();
        fetchRoutesByPostalDistrict();
    },[])

    const fetchDeliveryByPostalDistrict = async (postalDistrict) => {
        const response = await fetch(`http://localhost:8080/deliveries/postalDistrict/${postalDistrict}`);
        const deliveryDataByPostcode = await response.json();
        setDeliveryByPostalDistrict(
            (prevState) => ({
                ...prevState,
                [postalDistrict]: [deliveryDataByPostcode]}
        ));
    }

    useEffect(() => {
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

    const router = createBrowserRouter(

        [
            {
                path: "/",
                element: <NavigationComponent />,
                children: [
                    {
                        path: "/",
                        element: <DashboardContainer deliveryByPostalDistrict={deliveryByPostalDistrict} routeData = {routeData} />
                    },
                    {
                        path: "/map",
                        element: <OurMapContainer waypointData={waypointData} waypointsTestv2 = {waypointsTestv2} setPostalDistrict ={setPostalDistrict}/>
                    },
                    {
                        path: "/deliveries",
                        element: <DeliveriesContainer allWayPointData ={allWayPointData} deliveryData = {deliveryData}/>
                    }
                ]
            },
        ]

    )
    return (
        <>
        <main>
            <ResponsiveLayout>
                <RouterProvider router={router}/>
            </ResponsiveLayout>
            <footer className='footer'>
                <ul>
                    <li>Contact us: +44 (0) 330 1232288</li>
                    <li>RainforestRetail &copy;</li>
                </ul>
                <ul>
                    <li>Address: 123 Main Street, London, SW1</li>
                </ul>
            </footer>
        </main>
        </>
    )
}

export default ParentContainer; 