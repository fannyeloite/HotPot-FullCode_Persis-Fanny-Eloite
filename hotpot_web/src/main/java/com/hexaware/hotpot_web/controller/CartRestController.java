package com.hexaware.hotpot_web.controller;

import com.hexaware.hotpot_web.entity.Cart;
import com.hexaware.hotpot_web.service.CartService;
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

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
public class CartRestController {


@Autowired
private CartService cartService;

// POST: Add a new cart
@PostMapping
public ResponseEntity<Cart> addCart(@RequestBody Cart cart) {
    Cart savedCart = cartService.addCart(cart);
    return new ResponseEntity<>(savedCart, HttpStatus.CREATED);
}

// GET: Get all carts
@GetMapping
public ResponseEntity<List<Cart>> getAllCarts() {
    List<Cart> carts = cartService.getAllCarts();
    return new ResponseEntity<>(carts, HttpStatus.OK);
}

// GET: Get cart by ID
@GetMapping("/{id}")
public ResponseEntity<Cart> getCartById(@PathVariable int id) {
    Optional<Cart> optional = cartService.getCartById(id);
    return optional.map(cart -> new ResponseEntity<>(cart, HttpStatus.OK))
                   .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

// PUT: Update cart by ID
@PutMapping("/{id}")
public ResponseEntity<Cart> updateCart(@PathVariable int id, @RequestBody Cart updatedCart) {
    Optional<Cart> optional = cartService.getCartById(id);
    if (optional.isPresent()) {
        Cart saved = cartService.updateCart(id, updatedCart);
        return new ResponseEntity<>(saved, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

// DELETE: Delete cart by ID
@DeleteMapping("/{id}")
public ResponseEntity<String> deleteCart(@PathVariable int id) {
    boolean deleted = cartService.deleteCart(id);
    if (deleted) {
        return new ResponseEntity<>("Cart deleted successfully", HttpStatus.OK);
    } else {
        return new ResponseEntity<>("Cart not found", HttpStatus.NOT_FOUND);
    }
}
@GetMapping("/user/{email}")
public ResponseEntity<List<Cart>> getCartsByCustomer(@PathVariable String email) {
    return new ResponseEntity<>(cartService.getCartsByCustomerEmail(email), HttpStatus.OK);
}

}