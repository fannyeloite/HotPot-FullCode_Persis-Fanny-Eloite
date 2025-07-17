package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Cart;
import com.hexaware.hotpot_web.entity.CartRepo;
import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

@Autowired
private FoodRepo foodRepo;

@Autowired
private CartRepo cartRepo;

//@Override
//public Cart addCart(Cart cart) {
//    return cartRepo.save(cart);
//}

@Override
public Cart addCart(Cart cart) {
    // Optional: You can also check for existing cart entry for same foodId and customerEmail
    List<Cart> existingCarts = cartRepo.findByCustomerEmail(cart.getCustomerEmail());

    for (Cart existing : existingCarts) {
        if (existing.getFoodId() == cart.getFoodId()) {
            existing.setQuantity(existing.getQuantity() + cart.getQuantity());
            return cartRepo.save(existing);
        }
    }

    // ✅ Fetch food details by foodId
    Optional<Food> foodOpt = foodRepo.findById(cart.getFoodId());
    if (foodOpt.isPresent()) {
        Food food = foodOpt.get();
        cart.setFoodName(food.getFoodName());
        cart.setPrice(food.getPrice());
        cart.setImagePath(food.getImagePath());  // ✅ Set imagePath
    } else {
        throw new RuntimeException("Food not found with ID: " + cart.getFoodId());
    }

    return cartRepo.save(cart);
}

@Override
public List<Cart> getAllCarts() {
    return cartRepo.findAll();
}

@Override
public Optional<Cart> getCartById(int id) {
    return cartRepo.findById(id);
}

@Override
public Cart updateCart(int id, Cart updatedCart) {
    updatedCart.setCartId(id);
    return cartRepo.save(updatedCart);
}

@Override
public boolean deleteCart(int id) {
    if (cartRepo.existsById(id)) {
        cartRepo.deleteById(id);
        return true;
    }
    return false;
}
@Override
public List<Cart> getCartsByCustomerEmail(String email) {
    return cartRepo.findByCustomerEmail(email);
}

}