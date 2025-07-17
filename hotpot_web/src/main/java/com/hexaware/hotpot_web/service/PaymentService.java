package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Payment;
import java.util.List;
import java.util.Optional;

public interface PaymentService {
Payment addPayment(Payment payment);
List<Payment> getAllPayments();
Optional<Payment> getPaymentById(int id);
Payment updatePayment(int id, Payment payment);
boolean deletePayment(int id);
}