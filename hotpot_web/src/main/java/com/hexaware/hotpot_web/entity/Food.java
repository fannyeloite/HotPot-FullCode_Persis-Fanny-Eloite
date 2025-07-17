package com.hexaware.hotpot_web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodId;
    
    
    private String foodName;
    private double price;
    private String hotel;
    private String category;  
    private String restaurantownerEmail;
    private String imagePath;

    
    
    
    
	public Food() {
		super();
		// TODO Auto-generated constructor stub
	}
	



	public Food(int foodId, String foodName, double price, String hotel, String category, String restaurantownerEmail
			) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.price = price;
		this.hotel = hotel;
		this.category = category;
		this.restaurantownerEmail = restaurantownerEmail;
		
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



	public String getHotel() {
		return hotel;
	}



	public void setHotel(String hotel) {
		this.hotel = hotel;
	}



	public String getCategory() {
		return category;
	}



	public void setCategory(String category) {
		this.category = category;
	}



	public String getRestaurantownerEmail() {
		return restaurantownerEmail;
	}



	public void setRestaurantownerEmail(String restaurantownerEmail) {
		this.restaurantownerEmail = restaurantownerEmail;
	}

	public String getImagePath() {
	    return imagePath;
	}

	public void setImagePath(String imagePath) {
	    this.imagePath = imagePath;
	}


	
	

}
