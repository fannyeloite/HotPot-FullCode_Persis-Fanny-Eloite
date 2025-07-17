package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Order;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface OrderService {
Order addOrder(Order order);
List<Order> getAllOrders();
Optional<Order> getOrderById(int id);
Order updateOrder(int id, Order order);
boolean deleteOrder(int id);
List<Order> getOrdersByrestaurantowner(String restaurantownerEmail);
long countOrdersByRestaurantOwner(String email);

double getTotalEarningsByRestaurantOwner(String email);

long getTotalCustomersByRestaurantOwner(String email);

Map<String, Long> getMostOrderedFoods(String email);

}