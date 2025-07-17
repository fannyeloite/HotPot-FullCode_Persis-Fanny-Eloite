package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.*;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.*;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class OrderServiceImplTest {

    @InjectMocks
    private OrderServiceImpl orderService;

    @Mock
    private OrderRepo orderRepo;

    @Mock
    private FoodRepo foodRepo;

    @Test
    void testAddOrder_WithFoodFound() {
        Order order = new Order();
        order.setFoodId(1);
        Food food = new Food();
        food.setRestaurantownerEmail("owner@mail.com");
        food.setFoodName("Burger");
        food.setImagePath("/images/burger.jpg");

        when(foodRepo.findById(1)).thenReturn(Optional.of(food));
        when(orderRepo.save(any(Order.class))).thenReturn(order);

        Order result = orderService.addOrder(order);

        assertEquals("Burger", result.getFoodName());
        assertEquals("owner@mail.com", result.getRestaurantownerEmail());
    }

    @Test
    void testCountOrdersByRestaurantOwner() {
        Order o1 = new Order(); Order o2 = new Order();
        when(orderRepo.findByrestaurantownerEmail("owner@mail.com")).thenReturn(List.of(o1, o2));
        assertEquals(2, orderService.countOrdersByRestaurantOwner("owner@mail.com"));
    }

    @Test
    void testGetTotalEarningsByRestaurantOwner() {
        Order o1 = new Order(); o1.setTotalPrice(100);
        Order o2 = new Order(); o2.setTotalPrice(200);
        when(orderRepo.findByrestaurantownerEmail("owner@mail.com")).thenReturn(List.of(o1, o2));
        assertEquals(300, orderService.getTotalEarningsByRestaurantOwner("owner@mail.com"));
    }

    @Test
    void testGetMostOrderedFoods() {
        Order o1 = new Order(); o1.setFoodName("Pizza"); o1.setQuantity(2);
        Order o2 = new Order(); o2.setFoodName("Pizza"); o2.setQuantity(3);
        Order o3 = new Order(); o3.setFoodName("Burger"); o3.setQuantity(1);

        when(orderRepo.findByrestaurantownerEmail("owner@mail.com"))
            .thenReturn(List.of(o1, o2, o3));

        Map<String, Long> result = orderService.getMostOrderedFoods("owner@mail.com");
        assertEquals(5L, result.get("Pizza"));
        assertEquals(1L, result.get("Burger"));
    }
}
