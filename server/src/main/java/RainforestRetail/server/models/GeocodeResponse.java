package RainforestRetail.server.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GeocodeResponse {

    private List<Item> items;

    @Getter
    @Setter
    public static class Item {
        private String title;
        private String id;
        private String resultType;
        private String houseNumberType;
        private Address address;
        private Position position;
        private List<Access> access;
        private MapView mapView;
        private Scoring scoring;

        @Getter
        @Setter
        public static class Address {
            private String label;
            private String countryCode;
            private String countryName;
            private String state;
            private String countyCode;
            private String county;
            private String city;
            private String district;
            private String street;
            private String postalCode;
            private String houseNumber;
        }

        @Getter
        @Setter
        public static class Position {
            private double lat;
            private double lng;
        }

        @Getter
        @Setter
        public static class Access {
            private double lat;
            private double lng;
        }

        @Getter
        @Setter
        public static class MapView {
            private double west;
            private double south;
            private double east;
            private double north;
        }

        @Getter
        @Setter
        public static class Scoring {
            private double queryScore;
            private FieldScore fieldScore;

            @Getter
            @Setter
            public static class FieldScore {
                private double state;
                private double city;
                private List<Double> streets;
                private double houseNumber;
                private double postalCode;
            }
        }
    }
}
