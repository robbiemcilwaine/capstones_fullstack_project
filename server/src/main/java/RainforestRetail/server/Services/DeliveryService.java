package RainforestRetail.server.Services;

import org.springframework.stereotype.Service;

@Service
public class DeliveryService {
int houseNumber = 115;

    private String baseUrl = String.format("https://geocode.search.hereapi.com/v1/geocode?q=%s+%s+%s%2C+%s+%s+%s%2C+England&apiKey=6s-l22M1ZHNGlYJixzQoa0rlSYy0YOVwTSAphbBJA0Q", houseNumber, streetPrefix, streetSuffix, city, postalDistrict, outCode  );



}


