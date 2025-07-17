package com.hexaware.hotpot_web.entity;

import jakarta.persistence.*;

@Entity
public class Cart {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int cartId;

private String customerEmail;
private int foodId;
private String foodName;
private double price;
private int quantity;
private String imagePath;

public Cart() {}

public Cart(String customerEmail, int foodId, String foodName, double price, int quantity) {
    this.customerEmail = customerEmail;
    this.foodId = foodId;
    this.foodName = foodName;
    this.price = price;
    this.quantity = quantity;
}

public int getCartId() {
	return cartId;
}

public void setCartId(int cartId) {
	this.cartId = cartId;
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

public String getFoodName() {
	return foodName;
}

public void setFoodName(String foodName) {
	this.foodName = foodName;
}

public double getPrice() {
	return price;
}

public void setPrice(double price) {
	this.price = price;
}

public int getQuantity() {
	return quantity;
}

public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public String getImagePath() {
	return imagePath;
}

public void setImagePath(String imagePath) {
	this.imagePath = imagePath;
}


// Getters and setters...
}