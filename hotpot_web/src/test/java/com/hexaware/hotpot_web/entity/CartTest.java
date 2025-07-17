package com.hexaware.hotpot_web.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import com.hexaware.hotpot_web.entity.Cart;

public class CartTest {


@Test
void testCartEntity() {
    Cart cart = new Cart("user@example.com", 101, "Burger", 100.0, 3);

    assertEquals("user@example.com", cart.getCustomerEmail());
    assertEquals(101, cart.getFoodId());
    assertEquals("Burger", cart.getFoodName());
    assertEquals(100.0, cart.getPrice());
    assertEquals(3, cart.getQuantity());
}
}
