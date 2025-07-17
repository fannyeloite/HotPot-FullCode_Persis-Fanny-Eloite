package com.hexaware.hotpot_web.entity;

import jakarta.persistence.*;

@Entity
public class Delivery {


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int deliveryId;

private int orderId;
private String deliveryAddress;
private String deliveryStatus; // e.g., In Transit, Delivered, Failed

public Delivery() {}

public Delivery(int orderId, String deliveryAddress, String deliveryStatus) {
    this.orderId = orderId;
    this.deliveryAddress = deliveryAddress;
    this.deliveryStatus = deliveryStatus;
}

public int getDeliveryId() {
	return deliveryId;
}

public void setDeliveryId(int deliveryId) {
	this.deliveryId = deliveryId;
}

public int getOrderId() {
	return orderId;
}

public void setOrderId(int orderId) {
	this.orderId = orderId;
}

public String getDeliveryAddress() {
	return deliveryAddress;
}

public void setDeliveryAddress(String deliveryAddress) {
	this.deliveryAddress = deliveryAddress;
}

public String getDeliveryStatus() {
	return deliveryStatus;
}

public void setDeliveryStatus(String deliveryStatus) {
	this.deliveryStatus = deliveryStatus;
}

// Getters and setters...
}