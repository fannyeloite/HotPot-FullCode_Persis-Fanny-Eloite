package com.hexaware.hotpot_web.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order, Integer> {
    
    // Optional: Fetch all orders placed by a particular customer
    List<Order> findByCustomerEmail(String customerEmail);

    // Optional: Filter orders by status (e.g., "Delivered")
    List<Order> findByStatus(String status);
    List<Order> findByrestaurantownerEmail(String sellerEmail);
}
