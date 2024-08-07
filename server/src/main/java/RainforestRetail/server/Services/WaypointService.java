package RainforestRetail.server.Services;


import RainforestRetail.server.models.*;

import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class WaypointService {



    @Autowired
    DeliveryRepository deliveryRepository;
    @Autowired
    WaypointRepository waypointRepository;



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
            if(delivery.getPostalDistrict().equals(postalDistrict) || delivery.getCustomerName().equals("Hub")){
            allWaypointsInPostalDistrict.add(delivery.getWaypoint());
        }


    }

        Collections.reverse(allWaypointsInPostalDistrict);
        return allWaypointsInPostalDistrict;


}



}
