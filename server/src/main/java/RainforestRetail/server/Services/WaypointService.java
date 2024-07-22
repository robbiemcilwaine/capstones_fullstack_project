package RainforestRetail.server.Services;


import RainforestRetail.server.models.GeocodeResponse;
import RainforestRetail.server.models.Position;
import RainforestRetail.server.models.Position;
import RainforestRetail.server.repositories.PositionRepository;
import RainforestRetail.server.repositories.WaypointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class WaypointService {


//    private static final String apiKey = "6s-l22M1ZHNGlYJixzQoa0rlSYy0YOVwTSAphbBJA0Q";

    private String url = "https://geocode.search.hereapi.com/v1/geocode?q=155+Blackberry+Lane%2C+Coventry+CV2+3JR%2C+England&apiKey=6s-l22M1ZHNGlYJixzQoa0rlSYy0YOVwTSAphbBJA0Q";

    @Autowired
    PositionRepository positionRepository;

    @Autowired
    private RestTemplate restTemplate;


    public GeocodeResponse getGeocodeObject() {
        ResponseEntity<GeocodeResponse> response = restTemplate.exchange(url, HttpMethod.GET, null, GeocodeResponse.class);
        GeocodeResponse body = response.getBody();
        if (body == null) {
            System.out.println("loading");
        }
        return body;
    }

    public Position savePosition() {
        GeocodeResponse response = getGeocodeObject();

        GeocodeResponse.Item item = response.getItems().get(0);
        GeocodeResponse.Item.Position position = item.getPosition();
        Position positionEntity = new Position();
        positionEntity.setLat(position.getLat());
        positionEntity.setLng(position.getLng());
        return positionRepository.save(positionEntity);

    }


}
