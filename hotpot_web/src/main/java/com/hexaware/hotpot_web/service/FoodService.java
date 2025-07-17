package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Food;
import java.util.List;
import java.util.Optional;

public interface FoodService {
Food addFood(Food food);
List<Food> getAllFoods();
public List<Food> getFoodsByCategory(String categoryName);

Optional<Food> getFoodById(int id);
Food updateFood(int id, Food food);
boolean deleteFood(int id);
List<Food> getFoodsByRestaurantownerEmail(String email);

}