package RainforestRetail.server.models;
import java.util.List;


public class GeocodeResponse {

    private List<Item> items;

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

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

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getResultType() {
            return resultType;
        }

        public void setResultType(String resultType) {
            this.resultType = resultType;
        }

        public String getHouseNumberType() {
            return houseNumberType;
        }

        public void setHouseNumberType(String houseNumberType) {
            this.houseNumberType = houseNumberType;
        }

        public Address getAddress() {
            return address;
        }

        public void setAddress(Address address) {
            this.address = address;
        }

        public Position getPosition() {
            return position;
        }

        public void setPosition(Position position) {
            this.position = position;
        }

        public List<Access> getAccess() {
            return access;
        }

        public void setAccess(List<Access> access) {
            this.access = access;
        }

        public MapView getMapView() {
            return mapView;
        }

        public void setMapView(MapView mapView) {
            this.mapView = mapView;
        }

        public Scoring getScoring() {
            return scoring;
        }

        public void setScoring(Scoring scoring) {
            this.scoring = scoring;
        }


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


        public static class Position {
            private double lat;

            public double getLng() {
                return lng;
            }

            public void setLng(double lng) {
                this.lng = lng;
            }

            public double getLat() {
                return lat;
            }

            public void setLat(double lat) {
                this.lat = lat;
            }

            private double lng;
        }




        public static class Access {
            private double lat;
            private double lng;
        }


        public static class MapView {
            private double west;
            private double south;
            private double east;
            private double north;
        }


        public static class Scoring {
            private double queryScore;
            private FieldScore fieldScore;


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
