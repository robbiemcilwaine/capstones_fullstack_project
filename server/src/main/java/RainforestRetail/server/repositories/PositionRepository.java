package RainforestRetail.server.repositories;

import RainforestRetail.server.models.Position;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionRepository extends JpaRepository<Position, Long> {
}