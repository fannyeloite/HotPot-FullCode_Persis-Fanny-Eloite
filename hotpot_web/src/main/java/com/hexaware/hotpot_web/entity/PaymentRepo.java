package com.hexaware.hotpot_web.entity;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepo extends JpaRepository<Payment, Integer> {
    
    // Optional: Get payments by orderId
    List<Payment> findByOrderId(int orderId);
    
    // Optional: Get payments by status (Paid, Failed, etc.)
    List<Payment> findByStatus(String status);
}
