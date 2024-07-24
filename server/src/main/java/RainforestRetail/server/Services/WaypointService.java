package RainforestRetail.server.Services;


import RainforestRetail.server.models.*;

import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WaypointService {



    @Autowired
    DeliveryRepository deliveryRepository;
    @Autowired
    WaypointRepository waypointRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    DeliveryService deliveryService;

    @Transactional
    public Waypoint saveWaypoint(Delivery delivery) {
        GeocodeResponse response = deliveryService.getGeocodeObject(delivery);
        GeocodeResponse.Item item = response.getItems().get(0);
        GeocodeResponse.Item.Position position = item.getPosition();


        Waypoint waypoint = new Waypoint(position.getLat(), position.getLng(), delivery);

        waypointRepository.save(waypoint);
        delivery.setWaypoint(waypoint);
        deliveryRepository.save(delivery);
        System.out.println("this is the waypoint id" + delivery.getWaypoint().getId());
        return waypoint;


    }


    public List<Waypoint> getAllWaypoints(){
       return waypointRepository.findAll();
    }

    public Waypoint getWaypointById(Long id){
        Optional<Waypoint> waypoint = waypointRepository.findById(id);
        return waypoint.get();
    }

    public List<Waypoint> getWaypointsByPostalDistrict(String postalDistrict){
        List<Waypoint> allWaypointsInPostalDistrict = new ArrayList<>();
        for(Delivery delivery : deliveryRepository.findAll()){
            if(delivery.getPostalDistrict().equals(postalDistrict)){
            allWaypointsInPostalDistrict.add(delivery.getWaypoint());
        }


    }
        return allWaypointsInPostalDistrict;


}



}
