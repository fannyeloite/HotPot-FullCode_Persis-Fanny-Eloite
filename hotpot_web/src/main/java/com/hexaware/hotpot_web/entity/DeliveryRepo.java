package com.hexaware.hotpot_web.entity;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliveryRepo extends JpaRepository<Delivery, Integer> {
    
    // Optional: Get delivery details by orderId
    List<Delivery> findByOrderId(int orderId);
    
    // Optional: Get delivery details by status
    List<Delivery> findByDeliveryStatus(String deliveryStatus);
}
