package RainforestRetail.server.controllers;


import RainforestRetail.server.Services.WaypointService;
import RainforestRetail.server.models.GeocodeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static javax.print.attribute.standard.ReferenceUriSchemesSupported.HTTP;

@Controller
@RestController
@RequestMapping("/waypoint")
public class WaypointController {



    @Autowired
    WaypointService waypointService;



    @GetMapping
    public ResponseEntity<GeocodeResponse> getWaypoint(){
        GeocodeResponse waypoint = waypointService.getLatLong();
        return new ResponseEntity<>(waypoint, HttpStatus.OK);
    }
}
