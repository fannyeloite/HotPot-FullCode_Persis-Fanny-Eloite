package com.hexaware.hotpot_web.dto;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AuthResponseTest {

    @Test
    void testConstructorAndGetters() {
        AuthResponse authResponse = new AuthResponse("sample_token", "admin");

        assertEquals("sample_token", authResponse.getToken());
        assertEquals("admin", authResponse.getRole());
    }

    @Test
    void testSetters() {
        AuthResponse authResponse = new AuthResponse("", "");

        authResponse.setToken("new_token");
        authResponse.setRole("user");

        assertEquals("new_token", authResponse.getToken());
        assertEquals("user", authResponse.getRole());
    }
}
