package RainforestRetail.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "waypoints")
public class Waypoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private double latitude;

    @Column
    private double longitude;

    @ManyToMany(mappedBy = "listOfWaypoints")
    @JsonIgnoreProperties({"listOfWaypoints"})
    private List<Route> route;

    @OneToOne
    @JsonIgnoreProperties({"waypoint"})
    private Delivery delivery;

    public Waypoint(double latitude, double longitude,Delivery delivery) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.delivery = delivery;
        this.route = new ArrayList<>();
    }

    public Waypoint() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public List<Route> getRoute() {
        return route;
    }

    public void setRoute(List<Route> route) {
        this.route = route;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }
}
