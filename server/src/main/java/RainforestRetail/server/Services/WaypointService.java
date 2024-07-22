package RainforestRetail.server.Services;


import RainforestRetail.server.models.*;
import RainforestRetail.server.models.Position;
import RainforestRetail.server.repositories.PositionRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class WaypointService {


//    private static final String apiKey = "6s-l22M1ZHNGlYJixzQoa0rlSYy0YOVwTSAphbBJA0Q";


    @Autowired
    WaypointRepository waypointRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    DeliveryService deliveryService;


    public Waypoint saveWaypoint(Delivery delivery) {
        GeocodeResponse response = deliveryService.getGeocodeObject(delivery);

        GeocodeResponse.Item item = response.getItems().get(0);
        GeocodeResponse.Item.Position position = item.getPosition();
        Waypoint waypoint = new Waypoint(position.getLat(), position.getLng(), delivery);
        return waypointRepository.save(waypoint);


    }
}
