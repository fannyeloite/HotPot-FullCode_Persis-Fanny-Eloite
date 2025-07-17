package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Cart;

import java.util.List;
import java.util.Optional;

public interface CartService {
Cart addCart(Cart cart);
List<Cart> getAllCarts();
Optional<Cart> getCartById(int id);
Cart updateCart(int id, Cart updatedCart);
boolean deleteCart(int id);
List<Cart> getCartsByCustomerEmail(String email);

}