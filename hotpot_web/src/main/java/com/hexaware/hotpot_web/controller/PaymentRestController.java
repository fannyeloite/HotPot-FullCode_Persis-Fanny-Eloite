package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.entity.Payment;
import com.hexaware.hotpot_web.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/payments")
public class PaymentRestController {


@Autowired
private PaymentService paymentService;

@PostMapping
public ResponseEntity<Payment> addPayment(@RequestBody Payment payment) {
    return new ResponseEntity<>(paymentService.addPayment(payment), HttpStatus.CREATED);
}

@GetMapping
public ResponseEntity<List<Payment>> getAllPayments() {
    return new ResponseEntity<>(paymentService.getAllPayments(), HttpStatus.OK);
}

@GetMapping("/{id}")
public ResponseEntity<Payment> getPaymentById(@PathVariable int id) {
    Optional<Payment> optional = paymentService.getPaymentById(id);
    return optional.map(payment -> new ResponseEntity<>(payment, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

@PutMapping("/{id}")
public ResponseEntity<Payment> updatePayment(@PathVariable int id, @RequestBody Payment updatedPayment) {
    Optional<Payment> optional = paymentService.getPaymentById(id);
    if (optional.isPresent()) {
        return new ResponseEntity<>(paymentService.updatePayment(id, updatedPayment), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@DeleteMapping("/{id}")
public ResponseEntity<String> deletePayment(@PathVariable int id) {
    boolean deleted = paymentService.deletePayment(id);
    return deleted ?
            new ResponseEntity<>("Payment deleted successfully", HttpStatus.OK) :
            new ResponseEntity<>("Payment not found", HttpStatus.NOT_FOUND);
}
}