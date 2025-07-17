package com.hexaware.hotpot_web.entity;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.hexaware.hotpot_web.entity.Food;

public interface FoodRepo extends JpaRepository<Food, Integer> {
    List<Food> findByRestaurantownerEmail(String restaurantownerEmail);
    List<Food> findByCategory(String category);

}