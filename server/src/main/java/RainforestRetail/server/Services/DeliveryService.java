package RainforestRetail.server.Services;

import RainforestRetail.server.models.Delivery;
import RainforestRetail.server.models.GeocodeResponse;
import RainforestRetail.server.repositories.DeliveryRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

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

    public List<Delivery> getAllDeliveries(){
        return deliveryRepository.findAll();
    }

    public Delivery getDeliveryById(Long id){
        return deliveryRepository.findById(id).get();

    }

    public List<Delivery> getDeliveriesByPostalDistrict(String postalDistrict){
        List<Delivery> allDeliveriesInPostalDistrict =  new ArrayList<>();

        for(Delivery delivery: deliveryRepository.findAll()){
            if(postalDistrict.equals(delivery.getPostalDistrict())){
                allDeliveriesInPostalDistrict.add(delivery);

            }
        }

            return allDeliveriesInPostalDistrict;
    }





    }







