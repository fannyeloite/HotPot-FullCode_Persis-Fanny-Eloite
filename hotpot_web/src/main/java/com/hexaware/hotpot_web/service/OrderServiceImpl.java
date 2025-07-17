package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;
import com.hexaware.hotpot_web.entity.Order;
import com.hexaware.hotpot_web.entity.OrderRepo;
import com.hexaware.hotpot_web.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {


@Autowired
private OrderRepo orderRepo;
@Autowired
private FoodRepo foodRepo;

//
//public Order addOrder(Order order) {
//    return orderRepo.save(order);
//}

//@Override
//public Order addOrder(Order order) {
//    // Fetch the Food entity
//    Optional<Food> foodOpt = foodRepo.findById(order.getFoodId());
//    if (foodOpt.isPresent()) {
//        // Get the restaurant owner's email from the Food entity
//        String ownerEmail = foodOpt.get().getRestaurantownerEmail();
//        order.setRestaurantownerEmail(ownerEmail);  // Set it in the Order
//    } else {
//        throw new RuntimeException("Food item not found for ID: " + order.getFoodId());
//    }
//
//    return orderRepo.save(order);
//}

@Override
public Order addOrder(Order order) {
    // Fetch the Food entity
    Optional<Food> foodOpt = foodRepo.findById(order.getFoodId());
    
    if (foodOpt.isPresent()) {
        Food food = foodOpt.get();

        // ✅ Set restaurant owner email
        order.setRestaurantownerEmail(food.getRestaurantownerEmail());

        // ✅ Set foodName and imagePath
        order.setFoodName(food.getFoodName());
        order.setImagePath(food.getImagePath());

    } else {
        throw new RuntimeException("Food item not found for ID: " + order.getFoodId());
    }

    return orderRepo.save(order);
}


public List<Order> getAllOrders() {
    return orderRepo.findAll();
}

public Optional<Order> getOrderById(int id) {
    return orderRepo.findById(id);
}

public Order updateOrder(int id, Order order) {
    order.setOrderId(id);
    return orderRepo.save(order);
}

public boolean deleteOrder(int id) {
    if (orderRepo.existsById(id)) {
        orderRepo.deleteById(id);
        return true;
    }
    return false;
}
@Override
public List<Order> getOrdersByrestaurantowner(String restaurantownerEmail) {
    return orderRepo.findByrestaurantownerEmail(restaurantownerEmail);
}

public long countOrdersByRestaurantOwner(String email) {
    return orderRepo.findByrestaurantownerEmail(email).size();
}

public double getTotalEarningsByRestaurantOwner(String email) {
    return orderRepo.findByrestaurantownerEmail(email)
                    .stream()
                    .mapToDouble(Order::getTotalPrice)
                    .sum();
}

public long getTotalCustomersByRestaurantOwner(String email) {
    return orderRepo.findByrestaurantownerEmail(email)
                    .stream()
                    .map(Order::getCustomerEmail)
                    .distinct()
                    .count();
}
//
//public Map<String, Long> getMostOrderedFoods(String email) {
//    return orderRepo.findByrestaurantownerEmail(email).stream()
//        .collect(Collectors.groupingBy(Order::getFoodName, Collectors.summingLong(Order::getQuantity)));
//}

public Map<String, Long> getMostOrderedFoods(String email) {
    return orderRepo.findByrestaurantownerEmail(email).stream()
        .filter(order -> order.getFoodName() != null) // ✅ Prevent null mapping
        .collect(Collectors.groupingBy(
            Order::getFoodName,
            Collectors.summingLong(Order::getQuantity)
        ));
}



}