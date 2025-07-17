package com.hexaware.hotpot_web.entity;

import static org.junit.jupiter.api.Assertions.*;
import java.time.LocalDateTime;
import org.junit.jupiter.api.Test;
import com.hexaware.hotpot_web.entity.Payment;

public class PaymentTest {


@Test
void testPaymentEntity() {
    LocalDateTime time = LocalDateTime.now();
    Payment payment = new Payment(1, 250.0, "UPI", "Paid", time);

    assertEquals(1, payment.getOrderId());
    assertEquals(250.0, payment.getAmount());
    assertEquals("UPI", payment.getMethod());
    assertEquals("Paid", payment.getStatus());
    assertEquals(time, payment.getPaymentDate());
}
}
