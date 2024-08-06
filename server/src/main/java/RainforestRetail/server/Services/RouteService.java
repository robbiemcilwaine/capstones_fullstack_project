package RainforestRetail.server.Services;

import RainforestRetail.server.models.*;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.RouteRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Collections;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.Collections.reverse;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    WaypointRepository waypointRepository;

    @Autowired
    WaypointService waypointService;

    public Delivery saveHub(){
        Delivery theHub = new Delivery("Hub","Unit A","Albert","Street","Huddersfield","HD1","3RE", DeliveryStatus.UNDELIVERED);
        Delivery hubDelivery = deliveryRepository.findByCustomerName("Hub");
        if (hubDelivery == null) {
            deliveryRepository.save(theHub);
        }
        return theHub;
    }



    @Transactional
    public Route generateRouteByPostalDistrict(String postalDistrict){


        Delivery hubDelivery = deliveryRepository.findByCustomerName("Hub");
        Waypoint hubWaypoint = hubDelivery.getWaypoint();

        List<Waypoint> allWaypointsInPostalDistrict = new ArrayList<>();
        for(Delivery delivery : deliveryRepository.findAll()){
            if(delivery.getPostalDistrict().equals(postalDistrict)){
                allWaypointsInPostalDistrict.add(delivery.getWaypoint());

            }


        }
        if(postalDistrict!= "HD1"){
            allWaypointsInPostalDistrict.add(hubWaypoint);

        }
        reverse(allWaypointsInPostalDistrict);

        Route route = new Route(allWaypointsInPostalDistrict.get(1).getDelivery().getPostalDistrict() + "-1", RouteStatus.NOT_STARTED,false);
        route.setListOfWaypoints(allWaypointsInPostalDistrict);
        routeRepository.save(route);

//        for(Waypoint waypoint:allWaypointsInPostalDistrict){
//            System.out.println("checking if allWaypointsInPostalDistrictWorks" + waypoint.getId());
//            List<Route> routeList = new ArrayList<>();
//            routeList.add(route);
//            waypoint.setRoute(routeList);
//            waypointRepository.save(waypoint);
//        }

        for (Waypoint waypoint : allWaypointsInPostalDistrict) {
            System.out.println("checking if allWaypointsInPostalDistrictWorks" + waypoint.getId());


            if (waypoint.getRoute() == null) {
                waypoint.setRoute(new ArrayList<>());
            }
            waypoint.getRoute().add(route);

            waypointRepository.save(waypoint);
        }


        return route;

    }

    public Route getRouteByPostalDistrict(String postalDistrict) {
        for (Route route : routeRepository.findAll()) {
            if (route.getListOfWaypoints().get(1).getDelivery().getPostalDistrict().equals(postalDistrict)) {
                List<Waypoint> waypoints = route.getListOfWaypoints();
                Collections.reverse(waypoints);
                route.setListOfWaypoints(waypoints);
                return route;
            }

        }

        return null;
    }

    public void reverseRoutesWaypointList(){
        for(Route route:routeRepository.findAll()){
            List<Waypoint> waypoints = route.getListOfWaypoints();
            Collections.reverse(waypoints);
            route.setListOfWaypoints(waypoints);
        }
    }

    public void addHubToRoute(Route route, Delivery delivery){
        Waypoint convertDeliveryToWaypoint = waypointService.saveWaypoint(delivery);
        List<Waypoint> newListOfWayPoints = route.getListOfWaypoints();
        newListOfWayPoints.add(0,convertDeliveryToWaypoint);
        route.setListOfWaypoints(newListOfWayPoints);
    }

    public List<Route> getAllRoutes(){
        return routeRepository.findAll();
    }



}
