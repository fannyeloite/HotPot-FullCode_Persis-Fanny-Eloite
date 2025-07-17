package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.Cart;
import com.hexaware.hotpot_web.entity.CartRepo;
import com.hexaware.hotpot_web.entity.Food;
import com.hexaware.hotpot_web.entity.FoodRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class CartServiceImplTest {

    @InjectMocks
    private CartServiceImpl cartService;

    @Mock
    private CartRepo cartRepo;

    @Mock
    private FoodRepo foodRepo;

    @Test
    void testAddCart_NewCart() {
        Cart cart = new Cart();
        cart.setFoodId(1);
        cart.setCustomerEmail("user@example.com");
        cart.setQuantity(1);

        Food food = new Food();
        food.setFoodName("Burger");
        food.setPrice(120.0);
        food.setImagePath("/img/burger.jpg");

        when(cartRepo.findByCustomerEmail("user@example.com")).thenReturn(Collections.emptyList());
        when(foodRepo.findById(1)).thenReturn(Optional.of(food));
        when(cartRepo.save(any(Cart.class))).thenReturn(cart);

        Cart savedCart = cartService.addCart(cart);

        assertEquals("Burger", savedCart.getFoodName());
        assertEquals(120.0, savedCart.getPrice());
        verify(cartRepo, times(1)).save(cart);
    }

    @Test
    void testGetAllCarts() {
        when(cartRepo.findAll()).thenReturn(List.of(new Cart(), new Cart()));
        assertEquals(2, cartService.getAllCarts().size());
    }

    @Test
    void testGetCartById() {
        Cart cart = new Cart();
        cart.setCartId(5);

        when(cartRepo.findById(5)).thenReturn(Optional.of(cart));

        Optional<Cart> result = cartService.getCartById(5);
        assertTrue(result.isPresent());
        assertEquals(5, result.get().getCartId());
    }

    @Test
    void testDeleteCart_Success() {
        when(cartRepo.existsById(10)).thenReturn(true);
        boolean result = cartService.deleteCart(10);
        assertTrue(result);
        verify(cartRepo).deleteById(10);
    }

    @Test
    void testGetCartsByCustomerEmail() {
        List<Cart> list = List.of(new Cart(), new Cart());
        when(cartRepo.findByCustomerEmail("user@example.com")).thenReturn(list);

        List<Cart> result = cartService.getCartsByCustomerEmail("user@example.com");
        assertEquals(2, result.size());
    }
}
