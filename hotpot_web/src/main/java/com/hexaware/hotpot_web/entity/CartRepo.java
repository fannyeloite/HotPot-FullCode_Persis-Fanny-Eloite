package com.hexaware.hotpot_web.entity;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepo extends JpaRepository<Cart, Integer> {
List<Cart> findByCustomerEmail(String customerEmail);
Cart findByCustomerEmailAndFoodId(String customerEmail, int foodId);
}