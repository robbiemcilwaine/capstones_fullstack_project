package RainforestRetail.server.Services;

import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.GeocodeResponse;
import RainforestRetail.server.models.Waypoint;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.PositionRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DeliveryService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    WaypointRepository waypointRepository;

    public String fillUrl(Delivery delivery){

        String houseNumber =  String.valueOf(delivery.getHouseNumber());
        String streetPrefix = delivery.getStreetPrefix();
        String streetSuffix = delivery.getStreetSuffix();
        String city = delivery.getCity();
        String postalDistrict = delivery.getPostalDistrict();
        String outCode = String.valueOf(delivery.getOutCode());

         String baseUrl = String.format("https://geocode.search.hereapi.com/v1/geocode?q=%s+%s+%s%%2C+%s+%s+%s%%2C+England&apiKey=6s-l22M1ZHNGlYJixzQoa0rlSYy0YOVwTSAphbBJA0Q", houseNumber, streetPrefix, streetSuffix, city, postalDistrict, outCode  );
         return baseUrl;
    }

    public GeocodeResponse getGeocodeObject(Delivery delivery) {
        ResponseEntity<GeocodeResponse> response = restTemplate.exchange(this.fillUrl(delivery), HttpMethod.GET, null, GeocodeResponse.class);
        GeocodeResponse body = response.getBody();
        if (body == null) {
            System.out.println("loading");
        }
        return body;
    }

//    public Waypoint savePosition(Delivery delivery) {
//        GeocodeResponse response = this.getGeocodeObject(delivery);
//
//        GeocodeResponse.Item item = response.getItems().get(0);
//        GeocodeResponse.Item.Position position = item.getPosition();
//        Waypoint waypoint = new Waypoint(position.getLat(), position.getLng(),delivery);
////        waypoint.setLatitude(position.getLat());
////        waypoint.setLongitude(position.getLng());
//        return waypointRepository.save(waypoint);

    }







