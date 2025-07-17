package com.hexaware.hotpot_web.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class FoodTest {

@Test
public void testDefaultConstructor() {
    Food food = new Food();
    assertNotNull(food);
}

@Test
public void testParameterizedConstructor() {
    Food food = new Food(101, "Burger", 120.0, "Foodie’s Hub", "Savories", "resto@example.com");
    assertEquals(101, food.getFoodId());
    assertEquals("Burger", food.getFoodName());
    assertEquals(120.0, food.getPrice());
    assertEquals("Foodie’s Hub", food.getHotel());
    assertEquals("Savories", food.getCategory());
    assertEquals("resto@example.com", food.getRestaurantownerEmail());
}

@Test
public void testSettersAndGetters() {
    Food food = new Food();
    food.setFoodId(202);
    food.setFoodName("Pizza");
    food.setPrice(250.0);
    food.setHotel("Cheesy Corner");
    food.setCategory("Fast Food");
    food.setRestaurantownerEmail("owner@cheesy.com");

    assertEquals(202, food.getFoodId());
    assertEquals("Pizza", food.getFoodName());
    assertEquals(250.0, food.getPrice());
    assertEquals("Cheesy Corner", food.getHotel());
    assertEquals("Fast Food", food.getCategory());
    assertEquals("owner@cheesy.com", food.getRestaurantownerEmail());
}
}