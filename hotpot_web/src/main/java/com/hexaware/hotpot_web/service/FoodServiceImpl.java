package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;
import com.hexaware.hotpot_web.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodServiceImpl implements FoodService {


@Autowired
private FoodRepo foodRepo;

public Food addFood(Food food) {
    return foodRepo.save(food);
}

public List<Food> getAllFoods() {
    return foodRepo.findAll();
}

public Optional<Food> getFoodById(int id) {
    return foodRepo.findById(id);
}

public Food updateFood(int id, Food food) {
    food.setFoodId(id);
    return foodRepo.save(food);
}

@Override
public List<Food> getFoodsByCategory(String categoryName) {
    return foodRepo.findByCategory(categoryName);
}


public boolean deleteFood(int id) {
    if (foodRepo.existsById(id)) {
        foodRepo.deleteById(id);
        return true;
    }
    return false;
}
@Override
public List<Food> getFoodsByRestaurantownerEmail(String email) {
    return foodRepo.findByRestaurantownerEmail(email);
}

}