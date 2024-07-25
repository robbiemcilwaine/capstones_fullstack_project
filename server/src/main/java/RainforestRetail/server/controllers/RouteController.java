package RainforestRetail.server.controllers;

import RainforestRetail.server.Services.RouteService;
import RainforestRetail.server.models.Route;
import RainforestRetail.server.models.RouteStatus;
import RainforestRetail.server.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Controller
@RestController
@RequestMapping("/routes")
public class RouteController {

    @Autowired
    RouteService routeService;

    @Autowired
    RouteRepository routeRepository;


    @GetMapping
    public ResponseEntity<List<Route>> getAllRoutes(){
        routeService.reverseRoutesWaypointList();
        List<Route> allRoutes = routeRepository.findAll();
        return new ResponseEntity<>(allRoutes, HttpStatus.OK);

    }
    @GetMapping(value = "/{postalDistrict}")
    public ResponseEntity<Route> getRouteForAPostalDistrict(@PathVariable String postalDistrict){
        Route route = routeService.getRouteByPostalDistrict(postalDistrict);
        if(route == null){
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        else{
            return new ResponseEntity<>(route,HttpStatus.OK);
        }

    }



}
