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

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "postal_district", nullable = false)
    private String postalDistrict;

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
    @JsonIgnoreProperties({"deliveries"})
    private Waypoint waypoint;

    public Delivery(String customerName, String address, String postalDistrict, boolean driverAssigned, DeliveryStatus deliveryStatus, Waypoint waypoint) {
        this.customerName = customerName;
        this.address = address;
        this.postalDistrict = postalDistrict;
        this.driverAssigned = driverAssigned;
        this.deliveryStatus = deliveryStatus;
        this.waypoint = waypoint;
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

//    public Route getRoute() {
//        return route;
//    }
//
//    public void setRoute(Route route) {
//        this.route = route;
//    }

    public Waypoint getWaypoint() {
        return waypoint;
    }

    public void setWaypoint(Waypoint waypoint) {
        this.waypoint = waypoint;
    }
}
