package RainforestRetail.server.components;

import RainforestRetail.server.Services.RouteService;
import RainforestRetail.server.Services.WaypointService;
import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.DeliveryStatus;

import RainforestRetail.server.repositories.DeliveryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DeliveryRepository deliveryRepository;



    @Autowired
    RouteService routeService;



    @Autowired
    WaypointService waypointService;

    @Override
    public void run(ApplicationArguments args) throws Exception {





        Delivery delivery1 = new Delivery("Charisma", "11", "Woodhouse","Avenue", "Huddersfield","HD2", "1BP",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery1);
        waypointService.saveWaypoint(delivery1);

        Delivery delivery2 =  new Delivery("Aaron", "116", "Halifax","Road","Huddersfield","HD3", "3BS", DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery2);
        waypointService.saveWaypoint(delivery2);

        Delivery delivery3 = new Delivery("Dan","6","Horse Bank","Drive","Huddersfield","HD4","5HN", DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery3);
        waypointService.saveWaypoint(delivery3);


        Delivery delivery4 = new Delivery("Robbie","8","Greenwood","Buildings","Huddersfield","HD5","0DH", DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery4);
        waypointService.saveWaypoint(delivery4);

        Delivery delivery5 = new Delivery("Rabin", "36","Manley","Street","Huddersfield","HD6","1DQ",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery5);
        waypointService.saveWaypoint(delivery5);

        Delivery delivery6 = new Delivery("Colin", "6","John","St", "Huddesfield","HD6","2DY",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery6);
        waypointService.saveWaypoint((delivery6));

        Delivery delivery7 = new Delivery("Anna", "15","Carr Top","Lane","Huddersfield","HD7","4JB",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save((delivery7));
        waypointService.saveWaypoint(delivery7);


        Delivery delivery8 = new Delivery("Zsolt","24","Penistone","Road","Huddersfield","HD8","0PQ",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery8);
        waypointService.saveWaypoint(delivery8);

        Delivery delivery9 = new Delivery("Thibyaa","36","Banksville","","Huddersfield","HD9","1XP",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery9);
        waypointService.saveWaypoint(delivery9);

        Delivery delivery10 = new Delivery("Adam","4","Oastler","Ave","Huddersfield","HD1","4EU",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery10);
        waypointService.saveWaypoint(delivery10);

        Delivery delivery11 = new Delivery("Ben","42","Grasscroft","Rd","Huddersfield","HD1","4LP",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery11);
        waypointService.saveWaypoint(delivery11);

        Delivery delivery12 = new Delivery("Carl","152","Ashbrow","Rd","Huddersfield","HD2","1DU", DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery12);
        waypointService.saveWaypoint(delivery12);

        Delivery delivery13 = new Delivery("Dan","11", "Round Ings", "Rd", "Huddersfield", "HD3", "3FQ",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery13);
        waypointService.saveWaypoint(delivery13);

        Delivery delivery14 = new Delivery("Edward","27", "Delph", "Ln", "Huddersfield","HD4", "7JA",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery14);
        waypointService.saveWaypoint(delivery14);
//
        Delivery delivery15 = new Delivery("Fatima","42", "Greenside", "Ave", "Huddersfield", "HD5", "8QQ",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery15);
        waypointService.saveWaypoint(delivery15);

        Delivery delivery16 = new Delivery("Godson","49", "Netherend", "Rd", "Huddersfield", "HD7", "5EA",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery16);
        waypointService.saveWaypoint(delivery16);

        Delivery delivery17 = new Delivery("Henry","49", "Victoria", "St", "Huddersfield", "HD8", "9NW", DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery17);
        waypointService.saveWaypoint(delivery17);

        Delivery delivery18 = new Delivery("Ian","7", "Town End", "Cres", "Huddersfield", "HD9", "1QR",DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery18);
        waypointService.saveWaypoint(delivery18);


        Delivery theHub = new Delivery("Hub","Unit A","Albert","Street","Huddersfield","HD1","3RE", DeliveryStatus.UNDELIVERED);
        waypointService.saveWaypoint(theHub);



        routeService.generateRouteByPostalDistrict("HD2");
        routeService.generateRouteByPostalDistrict("HD1");
        routeService.generateRouteByPostalDistrict("HD3");
        routeService.generateRouteByPostalDistrict("HD4");
        routeService.generateRouteByPostalDistrict("HD5");
        routeService.generateRouteByPostalDistrict("HD6");
        routeService.generateRouteByPostalDistrict("HD7");
        routeService.generateRouteByPostalDistrict("HD8");
        routeService.generateRouteByPostalDistrict("HD9");





    }

}
