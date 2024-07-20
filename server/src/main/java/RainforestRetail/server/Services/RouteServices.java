package RainforestRetail.server.Services;

import RainforestRetail.server.repositories.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteServices {

    @Autowired
    RouteRepository routeRepository;
}
