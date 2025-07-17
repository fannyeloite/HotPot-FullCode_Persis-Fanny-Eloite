package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Payment;
import com.hexaware.hotpot_web.entity.PaymentRepo;
import com.hexaware.hotpot_web.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentServiceImpl implements PaymentService {


@Autowired
private PaymentRepo paymentRepo;

public Payment addPayment(Payment payment) {
    return paymentRepo.save(payment);
}

public List<Payment> getAllPayments() {
    return paymentRepo.findAll();
}

public Optional<Payment> getPaymentById(int id) {
    return paymentRepo.findById(id);
}

public Payment updatePayment(int id, Payment payment) {
    payment.setPaymentId(id);
    return paymentRepo.save(payment);
}

public boolean deletePayment(int id) {
    if (paymentRepo.existsById(id)) {
        paymentRepo.deleteById(id);
        return true;
    }
    return false;
}
}