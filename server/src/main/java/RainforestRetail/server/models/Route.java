package RainforestRetail.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "routes")
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //One-to-many relationship with Waypoints
    @OneToMany(mappedBy = "routes")
    @JsonIgnoreProperties({"routes"})
    private List<Waypoint> listOfWaypoints;

    public Route(long id, List<Waypoint> listOfWaypoints) {
        this.id = id;
        this.listOfWaypoints = listOfWaypoints;
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
}
