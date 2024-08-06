package RainforestRetail.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "route_name")
    private String routeName;

    @Column(name = "driver_assigned")
    private boolean driverAssigned;

    @Enumerated(EnumType.STRING)
    @Column(name = "route_status", nullable = false)
    private RouteStatus routeStatus;

//    //One-to-many relationship with Waypoints
//    @OneToMany(mappedBy = "route")
//    @JsonIgnoreProperties({"route"})
//    private List<Waypoint> listOfWaypoints;

    @ManyToMany
    @JoinTable(
            name = "route_waypoint",
            joinColumns = @JoinColumn(name = "route_id"),
            inverseJoinColumns = @JoinColumn(name = "waypoint_id")
    )
    @JsonIgnoreProperties({"route"})
    private List<Waypoint> listOfWaypoints;

    public Route(String routeName, RouteStatus routeStatus,boolean driverAssigned) {
        this.listOfWaypoints = new ArrayList<>();
        this.routeName = routeName;
        this.routeStatus = routeStatus;
        this.driverAssigned = driverAssigned;
    }

    public Route() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Waypoint> getListOfWaypoints() {
        return listOfWaypoints;
    }

    public void setListOfWaypoints(List<Waypoint> listOfWaypoints) {

        this.listOfWaypoints = listOfWaypoints;
    }

    public String getRouteName() {
        return routeName;
    }

    public void setRouteName(String routeName) {
        this.routeName = routeName;
    }

    public RouteStatus getRouteStatus() {
        return routeStatus;
    }

    public void setRouteStatus(RouteStatus routeStatus) {
        this.routeStatus = routeStatus;
    }

    public boolean isDriverAssigned() {
        return driverAssigned;
    }

    public void setDriverAssigned(boolean driverAssigned) {
        this.driverAssigned = driverAssigned;
    }
}
