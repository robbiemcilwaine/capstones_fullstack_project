package RainforestRetail.server.components;

import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.DeliveryStatus;
import RainforestRetail.server.models.Waypoint;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.RouteRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    WaypointRepository waypointRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        //Waypoints in HD1
        Waypoint waypoint1 = new Waypoint(53.6458 + Math.random() * 0.01, -1.7798 + Math.random() * 0.01, null);
        Waypoint waypoint2 = new Waypoint(53.6458 + Math.random() * 0.01, -1.7798 + Math.random() * 0.01, null);
        Waypoint waypoint3 = new Waypoint(53.6458 + Math.random() * 0.01, -1.7798 + Math.random() * 0.01, null);

        //Waypoints in HD3
        Waypoint waypoint4 = new Waypoint(53.6458 + Math.random() * 0.01, -1.8164 + Math.random() * 0.01, null);
        Waypoint waypoint5 = new Waypoint(53.6458 + Math.random() * 0.01, -1.8164 + Math.random() * 0.01, null);
        Waypoint waypoint6 = new Waypoint(53.6458 + Math.random() * 0.01, -1.8164 + Math.random() * 0.01, null);

//        Delivery delivery200 =  new Delivery("115 Blackberry Lane ");
//        deliveryRepository.save(delivery200);

        waypointRepository.save(waypoint1);
        waypointRepository.save(waypoint2);
        waypointRepository.save(waypoint3);
        waypointRepository.save(waypoint4);
        waypointRepository.save(waypoint5);
        waypointRepository.save(waypoint6);

//         Delivery delivery = new Delivery("Aaron", 119, "Orchard", "Way", "London", "CR0" , "7UY", false, DeliveryStatus.UNDELIVERED);


    }

}
