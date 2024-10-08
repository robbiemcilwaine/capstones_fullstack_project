package RainforestRetail.server.repositories;

import RainforestRetail.server.models.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

    Delivery findByCustomerName(String customerName);
}
