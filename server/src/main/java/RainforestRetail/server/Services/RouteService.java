package RainforestRetail.server.Services;

import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.Route;
import RainforestRetail.server.models.RouteStatus;
import RainforestRetail.server.models.Waypoint;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.RouteRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    WaypointRepository waypointRepository;

    public void generateRouteByPostalDistrict(String postalDistrict){

        List<Waypoint> allWaypointsInPostalDistrict = new ArrayList<>();
        for(Delivery delivery : deliveryRepository.findAll()){
            if(delivery.getPostalDistrict().equals(postalDistrict)){
                allWaypointsInPostalDistrict.add(delivery.getWaypoint());

            }


        }
        Route route = new Route(allWaypointsInPostalDistrict.get(0).getDelivery().getPostalDistrict() + "-1", RouteStatus.NOT_STARTED,false);
        route.setListOfWaypoints(allWaypointsInPostalDistrict);
        routeRepository.save(route);

        for(Waypoint waypoint:allWaypointsInPostalDistrict){
            System.out.println("checking if allWaypointsInPostalDistrictWorks" + waypoint.getId());
            waypoint.setRoute(route);
            waypointRepository.save(waypoint);
        }


    }

    public Route getRouteByPostalDistrict(String postalDistrict) {
        for (Route route : routeRepository.findAll()) {
            if (route.getListOfWaypoints().get(0).getDelivery().getPostalDistrict().equals(postalDistrict)) {
                return route;
            }

        }

        return null;
    }



}
