package com.hexaware.hotpot_web.config;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import static org.junit.jupiter.api.Assertions.*;

public class JwtUtilTest {

    private JwtUtil jwtUtil;

    @BeforeEach
    void setUp() {
        jwtUtil = new JwtUtil();
    }

    @Test
    void testGenerateTokenAndExtractData() {
        String username = "john@example.com";
        String role = "ADMIN";

        String token = jwtUtil.generateToken(username, role);

        assertNotNull(token);
        assertTrue(jwtUtil.validateToken(token));

        assertEquals(username, jwtUtil.extractUsername(token));
        assertEquals(role, jwtUtil.extractRole(token));
    }

    @Test
    void testValidateTokenWithInvalidToken() {
        String invalidToken = "invalid.jwt.token";

        assertFalse(jwtUtil.validateToken(invalidToken));
    }

    @Test
    void testTokenExpiration() throws InterruptedException {
        // simulate short-lived token for expiration testing
        JwtUtil shortLivedJwt = new JwtUtil() {
            @Override
            public String generateToken(String username, String role) {
                return Jwts.builder()
                        .setSubject(username)
                        .claim("role", role)
                        .setIssuedAt(new java.util.Date(System.currentTimeMillis()))
                        .setExpiration(new java.util.Date(System.currentTimeMillis() + 1)) // 1 ms expiration
                        .signWith(Keys.hmacShaKeyFor("mysecretkey1234567890mysecretkey1234567890".getBytes()), SignatureAlgorithm.HS256)
                        .compact();
            }
        };

        String token = shortLivedJwt.generateToken("test@example.com", "USER");

        // Wait to ensure token expires
        Thread.sleep(5);

        assertFalse(shortLivedJwt.validateToken(token));
    }
}
