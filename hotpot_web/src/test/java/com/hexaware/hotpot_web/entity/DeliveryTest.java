package com.hexaware.hotpot_web.entity;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import com.hexaware.hotpot_web.entity.Delivery;

public class DeliveryTest {

@Test
void testDeliveryEntity() {
    Delivery delivery = new Delivery(1, "123 Main Street", "In Transit");

    assertEquals(1, delivery.getOrderId());
    assertEquals("123 Main Street", delivery.getDeliveryAddress());
    assertEquals("In Transit", delivery.getDeliveryStatus());
}
}