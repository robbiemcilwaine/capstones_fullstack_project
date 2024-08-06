package RainforestRetail.server.controllers;

import RainforestRetail.server.Services.WaypointService;
import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.DeliveryStatus;
import RainforestRetail.server.models.Waypoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
@RequestMapping("/waypoints")
public class WaypointController{


    @Autowired
    WaypointService waypointService;

    @GetMapping
    public ResponseEntity<List<Waypoint>> getAllWaypoints(){
        List<Waypoint> waypoints = waypointService.getAllWaypoints();
        return new ResponseEntity<>(waypoints,HttpStatus.OK);
    }

    @GetMapping(value = "/{waypointId}" )
    public ResponseEntity<Waypoint> getWaypointById(@PathVariable Long waypointId){
        Waypoint waypoint = waypointService.getWaypointById(waypointId);
        if(waypoint != null){
            return new ResponseEntity<>(waypoint,HttpStatus.OK);

        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/postalDistrict/{postalDistrict}")
    public ResponseEntity<List<Waypoint>> getAllWaypointsInPostalDistrict(@PathVariable String postalDistrict){
        List<Waypoint> waypointsInAPostalDistrict = waypointService.getWaypointsByPostalDistrict(postalDistrict);
        if(waypointsInAPostalDistrict.size() != 0){
            return new ResponseEntity<>(waypointsInAPostalDistrict,HttpStatus.OK);

        }
       return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }












}
