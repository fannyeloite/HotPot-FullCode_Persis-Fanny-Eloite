package com.hexaware.hotpot_web.entity;

import static org.junit.jupiter.api.Assertions.*;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;

public class OrderTest {

    @Test
    void testOrderEntity() {
        LocalDateTime now = LocalDateTime.now();

        Order order = new Order(
            1,
            "customer@example.com",
            101,
            2,
            250.0,
            now,
            "owner@example.com",
            "Pending",
            "Pizza",
            "/images/pizza.jpg"
        );

        assertEquals(1, order.getOrderId());
        assertEquals("customer@example.com", order.getCustomerEmail());
        assertEquals(101, order.getFoodId());
        assertEquals(2, order.getQuantity());
        assertEquals(250.0, order.getTotalPrice());
        assertEquals(now, order.getOrderTime());
        assertEquals("owner@example.com", order.getRestaurantownerEmail());
        assertEquals("Pending", order.getStatus());
        assertEquals("Pizza", order.getFoodName());
        assertEquals("/images/pizza.jpg", order.getImagePath());
    }
}
