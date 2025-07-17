package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.*;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class FoodServiceImplTest {

    @InjectMocks
    private FoodServiceImpl foodService;

    @Mock
    private FoodRepo foodRepo;

    @Test
    void testAddFood() {
        Food food = new Food();
        food.setFoodName("Pizza");

        when(foodRepo.save(food)).thenReturn(food);
        Food result = foodService.addFood(food);
        assertEquals("Pizza", result.getFoodName());
    }

    @Test
    void testGetAllFoods() {
        when(foodRepo.findAll()).thenReturn(List.of(new Food(), new Food()));
        assertEquals(2, foodService.getAllFoods().size());
    }

    @Test
    void testDeleteFood_Exists() {
        when(foodRepo.existsById(1)).thenReturn(true);
        boolean result = foodService.deleteFood(1);
        assertTrue(result);
    }

    @Test
    void testGetFoodsByRestaurantownerEmail() {
        List<Food> list = List.of(new Food(), new Food());
        when(foodRepo.findByRestaurantownerEmail("owner@mail.com")).thenReturn(list);
        assertEquals(2, foodService.getFoodsByRestaurantownerEmail("owner@mail.com").size());
    }
}
