package RainforestRetail.server.components;

import RainforestRetail.server.Services.DeliveryService;
import RainforestRetail.server.Services.WaypointService;
import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.DeliveryStatus;
import RainforestRetail.server.models.Waypoint;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.RouteRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    WaypointRepository waypointRepository;

    @Autowired
    DeliveryService deliveryService;

    @Autowired
    WaypointService waypointService;

    @Override
    public void run(ApplicationArguments args) throws Exception {

//        Delivery delivery = new Delivery("Aaron", "119", "Orchard", "Way", "London", "CR0" , null, false, DeliveryStatus.UNDELIVERED);


        Delivery delivery1 = new Delivery("Charisma", "11", "Woodhouse","Avenue", "Huddersfield","HD2", "1BP",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery1);
        waypointService.saveWaypoint(delivery1);

        Delivery delivery2 =  new Delivery("Aaron", "116", "Halifax","Road","Huddersfield","HD3", "3BS", false, DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery2);
        waypointService.saveWaypoint(delivery2);

        Delivery delivery3 = new Delivery("Dan","6","Horse Bank","Drive","Huddersfield","HD4","5HN", false, DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery3);
        waypointService.saveWaypoint(delivery3);


        Delivery delivery4 = new Delivery("Robbie","8","Greenwood","Buildings","Huddersfield","HD5","0DH", false, DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery4);
        waypointService.saveWaypoint(delivery4);

        Delivery delivery5 = new Delivery("Rabin", "36","Manley","Street","Huddersfield","HD6","1DQ",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery5);
        waypointService.saveWaypoint(delivery5);

        Delivery delivery6 = new Delivery("Colin", "33","Station","Road", "Huddesfield","HD9","1EB",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery6);
        waypointService.saveWaypoint((delivery6));

        Delivery delivery7 = new Delivery("Anna", "15","Carr Top","Lane","Huddersfield","HD7","4JB",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save((delivery7));
        waypointService.saveWaypoint(delivery7);


        Delivery delivery8 = new Delivery("Zsolt","24","Penistone","Road","Huddersfield","HD8","0PQ",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery8);
        waypointService.saveWaypoint(delivery8);

        Delivery delivery9 = new Delivery("Thibyaa","36","Banksville","","Huddersfield","HD9","1XP",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery9);
        waypointService.saveWaypoint(delivery9);

        Delivery delivery10 = new Delivery("Adam","4","Oastler","Ave","Huddersfield","HD1","4EU",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery10);
        waypointService.saveWaypoint(delivery10);

        Delivery delivery11 = new Delivery("Ben","42","Grasscroft","Rd","Huddersfield","HD1","4LP",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery11);
        waypointService.saveWaypoint(delivery11);

        Delivery delivery12 = new Delivery("Carl","152","Ashbrow","Rd","Huddersfield","HD2","1DU",false, DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery12);
        waypointService.saveWaypoint(delivery12);

        Delivery delivery13 = new Delivery("Dan","11", "Round Ings", "Rd", "Huddersfield", "HD3", "3FQ",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery13);
        waypointService.saveWaypoint(delivery13);

        Delivery delivery14 = new Delivery("Edward","27", "Delph", "Ln", "Huddersfield","HD4", "7JA",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery14);
        waypointService.saveWaypoint(delivery14);

        Delivery delivery15 = new Delivery("Fatima","42", "Greenside", "Ave", "Huddersfield", "HD5", "8QQ",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery15);
        waypointService.saveWaypoint(delivery15);

        Delivery delivery16 = new Delivery("Godson","49", "Netherend", "Rd", "Huddersfield", "HD7", "5EA",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery16);
        waypointService.saveWaypoint(delivery16);

        Delivery delivery17 = new Delivery("Henry","49", "Victoria", "St", "Huddersfield", "HD8", "9NW",false, DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery17);
        waypointService.saveWaypoint(delivery17);

        Delivery delivery18 = new Delivery("Ian","7", "Town End", "Cres", "Huddersfield", "HD9", "1QR",false,DeliveryStatus.UNDELIVERED);
        deliveryRepository.save(delivery18);
        waypointService.saveWaypoint(delivery18);






    }

}
