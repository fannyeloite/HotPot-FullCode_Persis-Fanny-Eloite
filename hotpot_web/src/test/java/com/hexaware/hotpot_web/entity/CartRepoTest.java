package com.hexaware.hotpot_web.entity;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CartRepoTest {

    @Autowired
    private CartRepo cartRepo;

    @Test
    void testCartRepoIsNotNull() {
        assertNotNull(cartRepo, "CartRepo should not be null");
    }
}
