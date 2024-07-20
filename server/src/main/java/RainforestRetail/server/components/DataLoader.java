package RainforestRetail.server.components;

import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.Waypoint;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.RouteRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    WaypointRepository waypointRepository;
}
