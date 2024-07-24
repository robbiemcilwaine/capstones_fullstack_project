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
    private String houseNumber;

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



//    //Many to one relationship with Route
//    @ManyToOne
//    @JoinColumn(name = "route_id")
//    @JsonIgnoreProperties({"deliveries"})
//    private Route route;

    // One to one relationship with waypoint

    @OneToOne
    @JsonIgnoreProperties({"delivery"})
    private Waypoint waypoint;

    public Delivery(String customerName, String houseNumber, String streetPrefix, String streetSuffix, String city, String postalDistrict, String outCode, DeliveryStatus deliveryStatus) {
        this.customerName = customerName;

        this.postalDistrict = postalDistrict;
        this.deliveryStatus = deliveryStatus;
        this.waypoint = null;
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

    public String getPostalDistrict() {
        return postalDistrict;
    }

    public void setPostalDistrict(String postalDistrict) {
        this.postalDistrict = postalDistrict;
    }

    public DeliveryStatus getDeliveryStatus() {
        return deliveryStatus;
    }

    public void setDeliveryStatus(DeliveryStatus deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }


    public Waypoint getWaypoint() {
        return waypoint;
    }

    public void setWaypoint(Waypoint waypoint) {
        System.out.println("is it setting waypoint?");
        this.waypoint = waypoint;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
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
