package RainforestRetail.server.controllers;

import RainforestRetail.server.Services.DeliveryService;
import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.DeliveryStatus;
import RainforestRetail.server.models.GeocodeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
public class DeliveryController {



    @Autowired
    DeliveryService deliveryService;



    @GetMapping
    public ResponseEntity<GeocodeResponse> getWaypoint(){
        Delivery delivery = new Delivery("Aaron", 119, "Orchard", "Way", "London", "CR0" , "7UY", false, DeliveryStatus.UNDELIVERED);


        GeocodeResponse waypoint = deliveryService.getGeocodeObject(delivery);
        return new ResponseEntity<>(waypoint, HttpStatus.OK);
    }
}

