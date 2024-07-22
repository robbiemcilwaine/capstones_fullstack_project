package RainforestRetail.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "deliveries")
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "customer_name", nullable = false)
    private String customerName;

    @Column(name = "house_number", nullable = false)
    private int houseNumber;

    @Column(name = "street_prefix", nullable = false)
    private String streetPrefix;

    @Column(name = "street_suffix", nullable = false)
    private String streetSuffix;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "postal_district", nullable = false)
    private String postalDistrict;

    @Column(name = "out_code", nullable = false)
    private String outCode;



    @Column(name = "driver_assigned", nullable = false)
    private boolean driverAssigned;

    @Enumerated(EnumType.STRING)
    @Column(name = "delivery_status", nullable = false)
    private DeliveryStatus deliveryStatus;

    @Column(name = "geocode_url", nullable = false)
    private String geocodeUrl;

//    //Many to one relationship with Route
//    @ManyToOne
//    @JoinColumn(name = "route_id")
//    @JsonIgnoreProperties({"deliveries"})
//    private Route route;

    // One to one relationship with waypoint
    @OneToOne
    @JsonIgnoreProperties({"deliveries"})
    private Waypoint waypoint;

    public Delivery(String customerName, int houseNumber, String streetPrefix, String streetSuffix, String city, String postalDistrict, String outCode, boolean driverAssigned, DeliveryStatus deliveryStatus, Waypoint waypoint) {
        this.customerName = customerName;

        this.postalDistrict = postalDistrict;
        this.driverAssigned = driverAssigned;
        this.deliveryStatus = deliveryStatus;
        this.waypoint = waypoint;
        this.geocodeUrl = "";
        this.outCode = outCode;
        this.city = city;
        this.streetSuffix = streetSuffix;
        this.streetPrefix = streetPrefix;
        this.houseNumber = houseNumber;
    }

    public Delivery() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostalDistrict() {
        return postalDistrict;
    }

    public void setPostalDistrict(String postalDistrict) {
        this.postalDistrict = postalDistrict;
    }

    public boolean isDriverAssigned() {
        return driverAssigned;
    }

    public void setDriverAssigned(boolean driverAssigned) {
        this.driverAssigned = driverAssigned;
    }

    public DeliveryStatus getDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(DeliveryStatus deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }

    public String getGeocodeUrl() {
        return geocodeUrl;
    }

    public void setGeocodeUrl(String geocodeUrl) {
        this.geocodeUrl = geocodeUrl;
    }

    public Waypoint getWaypoint() {
        return waypoint;
    }

    public void setWaypoint(Waypoint waypoint) {
        this.waypoint = waypoint;
    }

    public int getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(int houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getStreetPrefix() {
        return streetPrefix;
    }

    public void setStreetPrefix(String streetPrefix) {
        this.streetPrefix = streetPrefix;
    }

    public String getStreetSuffix() {
        return streetSuffix;
    }

    public void setStreetSuffix(String streetSuffix) {
        this.streetSuffix = streetSuffix;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getOutCode() {
        return outCode;
    }

    public void setOutCode(String outCode) {
        this.outCode = outCode;
    }
}

//    public Route getRoute() {
//        return route;
//    }
//
//    public void setRoute(Route route) {
//        this.route = route;
//    }
