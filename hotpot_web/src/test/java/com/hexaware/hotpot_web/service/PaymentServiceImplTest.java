package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Payment;
import com.hexaware.hotpot_web.entity.PaymentRepo;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class PaymentServiceImplTest {

    @InjectMocks
    private PaymentServiceImpl paymentService;

    @Mock
    private PaymentRepo paymentRepo;

    @Test
    void testAddPayment() {
        Payment payment = new Payment();
        payment.setStatus("PAID");

        when(paymentRepo.save(payment)).thenReturn(payment);
        Payment result = paymentService.addPayment(payment);
        assertEquals("PAID", result.getStatus());
    }

    @Test
    void testDeletePayment() {
        when(paymentRepo.existsById(1)).thenReturn(true);
        assertTrue(paymentService.deletePayment(1));
        verify(paymentRepo).deleteById(1);
    }
}
