package com.hexaware.hotpot_web.dto;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class LoginRequestTest {

    @Test
    void testGettersAndSetters() {
        LoginRequest loginRequest = new LoginRequest();

        loginRequest.setEmail("user@example.com");
        loginRequest.setPassword("password123");

        assertEquals("user@example.com", loginRequest.getEmail());
        assertEquals("password123", loginRequest.getPassword());
    }
}
