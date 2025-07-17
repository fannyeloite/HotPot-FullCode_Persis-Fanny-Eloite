package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
@Autowired
private userRepo userRepo;

@Autowired
private FoodRepo foodRepo;

@Autowired
private OrderRepo orderRepo;

@Override
public long getTotalUsers() {
    return userRepo.count();
}

@Override
public long getTotalFoodItems() {
    return foodRepo.count();
}

@Override
public long getTotalOrders() {
    return orderRepo.count();
}

@Override
public long getTotalRestaurants() {
    return userRepo.countByRole("RESTAURANTOWNER");
}

@Override
public long getTotalCustomers() {
    return userRepo.countByRole("CUSTOMER");
}
}