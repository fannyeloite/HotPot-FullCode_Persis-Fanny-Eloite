package com.hexaware.hotpot_web.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
public class Payment {


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int paymentId;
private int orderId;
private double amount;
private String method; // e.g., UPI, Card, COD
private String status; // e.g., Paid, Failed, Pending
private LocalDateTime paymentDate;

public Payment() {}

public Payment(int orderId, double amount, String method, String status, LocalDateTime paymentDate) {
    this.orderId = orderId;
    this.amount = amount;
    this.method = method;
    this.status = status;
    this.paymentDate = paymentDate;
}

public int getPaymentId() {
	return paymentId;
}

public void setPaymentId(int paymentId) {
	this.paymentId = paymentId;
}

public int getOrderId() {
	return orderId;
}

public void setOrderId(int orderId) {
	this.orderId = orderId;
}

public double getAmount() {
	return amount;
}

public void setAmount(double amount) {
	this.amount = amount;
}

public String getMethod() {
	return method;
}

public void setMethod(String method) {
	this.method = method;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public LocalDateTime getPaymentDate() {
	return paymentDate;
}

public void setPaymentDate(LocalDateTime paymentDate) {
	this.paymentDate = paymentDate;
}

// Getters and setters...
}