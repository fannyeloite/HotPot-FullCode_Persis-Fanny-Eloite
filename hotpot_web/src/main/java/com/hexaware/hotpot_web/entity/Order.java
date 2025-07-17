package com.hexaware.hotpot_web.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int orderId;

private String customerEmail;
private int foodId;
private int quantity;
private double totalPrice;
private LocalDateTime orderTime;
private String restaurantownerEmail;
private String status; // e.g., "Pending", "Delivered", "Cancelled"
private String foodName;
private String imagePath;


public Order() {}




public Order(int orderId, String customerEmail, int foodId, int quantity, double totalPrice, LocalDateTime orderTime,
		String restaurantownerEmail, String status, String foodName, String imagePath) {
	super();
	this.orderId = orderId;
	this.customerEmail = customerEmail;
	this.foodId = foodId;
	this.quantity = quantity;
	this.totalPrice = totalPrice;
	this.orderTime = orderTime;
	this.restaurantownerEmail = restaurantownerEmail;
	this.status = status;
	this.foodName = foodName;
	this.imagePath = imagePath;
}







public int getOrderId() {
	return orderId;
}

public void setOrderId(int orderId) {
	this.orderId = orderId;
}

public String getCustomerEmail() {
	return customerEmail;
}

public void setCustomerEmail(String customerEmail) {
	this.customerEmail = customerEmail;
}

public int getFoodId() {
	return foodId;
}

public void setFoodId(int foodId) {
	this.foodId = foodId;
}

public int getQuantity() {
	return quantity;
}

public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public double getTotalPrice() {
	return totalPrice;
}

public void setTotalPrice(double totalPrice) {
	this.totalPrice = totalPrice;
}

public LocalDateTime getOrderTime() {
	return orderTime;
}

public void setOrderTime(LocalDateTime orderTime) {
	this.orderTime = orderTime;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public String getRestaurantownerEmail() {
	return restaurantownerEmail;
}

public void setRestaurantownerEmail(String restaurantownerEmail) {
	this.restaurantownerEmail = restaurantownerEmail;
}



public String getFoodName() {
	return foodName;
}



public void setFoodName(String foodName) {
	this.foodName = foodName;
}



public String getImagePath() {
	return imagePath;
}



public void setImagePath(String imagePath) {
	this.imagePath = imagePath;
}

// Getters and setters...

// (Generate using your IDE)
}