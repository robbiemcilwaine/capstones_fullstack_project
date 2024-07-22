package RainforestRetail.server.components;

import RainforestRetail.server.Services.DeliveryService;
import RainforestRetail.server.Services.WaypointService;
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

    @Autowired
    DeliveryService deliveryService;

    @Autowired
    WaypointService waypointService;

    @Override
    public void run(ApplicationArguments args) throws Exception {

//        Delivery delivery = new Delivery("Aaron", "119", "Orchard", "Way", "London", "CR0" , null, false, DeliveryStatus.UNDELIVERED);


        Delivery delivery1 = new Delivery("Charisma", "11", "Woodhouse","Avenue", "Huddersfield","HD2", "1BP",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery1);
        waypointService.saveWaypoint(delivery1);

        Delivery delivery2 =  new Delivery("Aaron", "116", "Halifax","Road","Huddersfield","HD3", "3BS", false, DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery2);
        waypointService.saveWaypoint(delivery2);






    }

}
