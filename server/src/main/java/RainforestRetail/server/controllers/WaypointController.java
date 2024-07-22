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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RestController
@RequestMapping("/waypoint")
public class WaypointController{


    @Autowired
    WaypointService waypointService;











}
