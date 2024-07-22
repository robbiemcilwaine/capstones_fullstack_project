package RainforestRetail.server.controllers;

import RainforestRetail.server.Services.DeliveryService;
import RainforestRetail.server.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import RainforestRetail.server.models.GeocodeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import static javax.print.attribute.standard.ReferenceUriSchemesSupported.HTTP;
import static javax.print.attribute.standard.ReferenceUriSchemesSupported.HTTPS;

@Controller
@RestController
@RequestMapping("/deliveries")
public class DeliveryController {



    @Autowired
    DeliveryService deliveryService;

    @GetMapping
    public ResponseEntity<List<Delivery>> getAllOfTheDeliveries(){
        List<Delivery> allDeliveries = deliveryService.getAllDeliveries();
        return new ResponseEntity<>(allDeliveries,HttpStatus.OK);
    }

    @GetMapping(value = "/{deliveryId}")
    public ResponseEntity<Delivery> getAdeliveryById(@PathVariable Long deliveryId){
        Delivery delivery = deliveryService.getDeliveryById(deliveryId);
        if(delivery != null){
            return new ResponseEntity<>(delivery,HttpStatus.OK);
        }

        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/postalDistrict/{postalDistrict}")
    public ResponseEntity<List<Delivery>> getAllDeliveriesInPostalDistrict(@PathVariable String postalDistrict){
        List<Delivery> deliveries = deliveryService.getDeliveriesByPostalDistrict(postalDistrict);
        if(deliveries.size() != 0 ){
            return new ResponseEntity<>(deliveries,HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }


}

