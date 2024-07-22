package RainforestRetail.server.controllers;


import RainforestRetail.server.Services.WaypointService;
import RainforestRetail.server.models.GeocodeResponse;
import RainforestRetail.server.models.Position;
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
@RequestMapping("/position")
public class PositionController {



    @Autowired
    WaypointService waypointService;




    @GetMapping("/save-waypoint")
    public ResponseEntity<Position> saveWaypoint(){
        Position savedPosition = waypointService.savePosition();
        return new ResponseEntity<>(savedPosition, HttpStatus.OK);
    }


}
