package RainforestRetail.server.models;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import org.hibernate.cache.spi.support.AbstractReadWriteAccess;

import java.util.ArrayList;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GeocodeResponse {

    private Position position;

    @Getter
    @Setter
    public class Position{
        public double lat;
        public double lng;
    }









}
