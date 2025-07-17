package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;
import com.hexaware.hotpot_web.entity.Order;
import com.hexaware.hotpot_web.service.OrderService;

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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderRestController {

@Autowired
private FoodRepo foodrepo;

@Autowired
private OrderService orderService;

@PostMapping
public ResponseEntity<Order> addOrder(@RequestBody Order order) {
    return new ResponseEntity<>(orderService.addOrder(order), HttpStatus.CREATED);
}

@GetMapping
public ResponseEntity<List<Order>> getAllOrders() {
    return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
}

@GetMapping("/{id}")
public ResponseEntity<Order> getOrderById(@PathVariable int id) {
    Optional<Order> optional = orderService.getOrderById(id);
    return optional.map(order -> new ResponseEntity<>(order, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

@PutMapping("/{id}")
public ResponseEntity<Order> updateOrder(@PathVariable int id, @RequestBody Order updatedOrder) {
    Optional<Order> optional = orderService.getOrderById(id);
    if (optional.isPresent()) {
        return new ResponseEntity<>(orderService.updateOrder(id, updatedOrder), HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@DeleteMapping("/{id}")
public ResponseEntity<String> deleteOrder(@PathVariable int id) {
    boolean deleted = orderService.deleteOrder(id);
    return deleted ?
            new ResponseEntity<>("Order deleted successfully", HttpStatus.OK) :
            new ResponseEntity<>("Order not found", HttpStatus.NOT_FOUND);
}

@GetMapping("/with-food")
public ResponseEntity<List<Map<String, Object>>> getOrdersWithFoodDetails() {
    List<Order> orders = orderService.getAllOrders();
    List<Map<String, Object>> enriched = new ArrayList<>();

    for (Order order : orders) {
        Optional<Food> foodOpt = foodrepo.findById(order.getFoodId());
        if (foodOpt.isPresent()) {
            Food food = foodOpt.get();

            Map<String, Object> map = new HashMap<>();
            map.put("orderId", order.getOrderId());
            map.put("customerEmail", order.getCustomerEmail());
            map.put("foodId", order.getFoodId());
            map.put("foodName", food.getFoodName());
            map.put("imagePath", food.getImagePath());
            map.put("hotel", food.getHotel());
            map.put("restaurantownerEmail", food.getRestaurantownerEmail());
            map.put("quantity", order.getQuantity());
            map.put("totalPrice", order.getTotalPrice());
            map.put("status", order.getStatus());
            map.put("orderTime", order.getOrderTime());

            enriched.add(map);
        }
    }

    return ResponseEntity.ok(enriched);
}
@GetMapping("/owner/{email}")
public ResponseEntity<List<Order>>getOrdersByrestaurantowner(@PathVariable String email) {
    return new ResponseEntity<>( orderService.getOrdersByrestaurantowner(email), HttpStatus.OK);
}


@GetMapping("/stats/count/{email}")
public long getTotalOrders(@PathVariable String email) {
    return orderService.countOrdersByRestaurantOwner(email);
}

@GetMapping("/stats/earnings/{email}")
public double getTotalEarnings(@PathVariable String email) {
    return orderService.getTotalEarningsByRestaurantOwner(email);
}

@GetMapping("/stats/customers/{email}")
public long getTotalCustomers(@PathVariable String email) {
    return orderService.getTotalCustomersByRestaurantOwner(email);
}

@GetMapping("/stats/most-ordered/{email}")
public Map<String, Long> getMostOrderedFoods(@PathVariable String email) {
    return orderService.getMostOrderedFoods(email);
}

@GetMapping("/customer/{email}")
public ResponseEntity<List<Order>> getOrdersByCustomer(@PathVariable String email) {
    List<Order> orders = orderService.getAllOrders();
    List<Order> filtered = orders.stream()
                                 .filter(order -> order.getCustomerEmail().equalsIgnoreCase(email))
                                 .toList();
    return new ResponseEntity<>(filtered, HttpStatus.OK);
}


}