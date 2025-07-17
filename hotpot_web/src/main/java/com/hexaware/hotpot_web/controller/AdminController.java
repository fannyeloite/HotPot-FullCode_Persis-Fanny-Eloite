package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/admin/stats")
public class AdminController {
@Autowired
private AdminService adminService;

@GetMapping("/users")
public long getTotalUsers() {
    return adminService.getTotalUsers();
}

@GetMapping("/food-items")
public long getTotalFoodItems() {
    return adminService.getTotalFoodItems();
}

@GetMapping("/orders")
public long getTotalOrders() {
    return adminService.getTotalOrders();
}

@GetMapping("/restaurants")
public long getTotalRestaurants() {
    return adminService.getTotalRestaurants();
}

@GetMapping("/customers")
public long getTotalCustomers() {
    return adminService.getTotalCustomers();
}
}