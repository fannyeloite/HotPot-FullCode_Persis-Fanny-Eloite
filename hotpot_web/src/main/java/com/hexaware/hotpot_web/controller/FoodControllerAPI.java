package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.service.FoodService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/foods")
public class FoodControllerAPI {


@Autowired
private FoodService foodService;

@PostMapping
public ResponseEntity<Food> addFood(@RequestBody Food food) {
    return new ResponseEntity<>(foodService.addFood(food), HttpStatus.CREATED);
}

@GetMapping
public ResponseEntity<List<Food>> getFoods() {
    return new ResponseEntity<>(foodService.getAllFoods(), HttpStatus.OK);
}

@GetMapping("/{id}")
public ResponseEntity<Food> getFood(@PathVariable int id) {
    Optional<Food> opt = foodService.getFoodById(id);
    return opt.map(food -> new ResponseEntity<>(food, HttpStatus.OK))
              .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

@PutMapping("/{id}")
public ResponseEntity<Food> updateFood(@PathVariable int id, @RequestBody Food food) {
    Optional<Food> opt = foodService.getFoodById(id);
    if (opt.isPresent()) {
        return new ResponseEntity<>(foodService.updateFood(id, food), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@DeleteMapping("/{id}")
public ResponseEntity<String> deleteFood(@PathVariable int id) {
    boolean deleted = foodService.deleteFood(id);
    if (deleted) {
        return new ResponseEntity<>("Food deleted successfully", HttpStatus.OK);
    } else {
        return new ResponseEntity<>("Food not found", HttpStatus.NOT_FOUND);
    }
}

@GetMapping("/category/{categoryName}")
public ResponseEntity<List<Food>> getFoodsByCategory(@PathVariable String categoryName) {
    List<Food> foods = foodService.getFoodsByCategory(categoryName);
    return new ResponseEntity<>(foods, HttpStatus.OK);
}

@GetMapping("/owner/{email}")
public ResponseEntity<List<Food>> getFoodsByOwner(@PathVariable String email) {
    List<Food> foods = foodService.getFoodsByRestaurantownerEmail(email);
    return new ResponseEntity<>(foods, HttpStatus.OK);
}

@GetMapping("/count/{email}")
public long getTotalFoodsByOwner(@PathVariable String email) {
    return foodService.getFoodsByRestaurantownerEmail(email).size();
}

}
