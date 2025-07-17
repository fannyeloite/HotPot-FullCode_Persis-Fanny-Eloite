package com.hexaware.hotpot_web.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserTest {

@Test
public void testConstructorAndGetters() {
    user u = new user("John Doe", "john@example.com", "pass123", "male", "9876543210", "123 Street", "Customer");

    assertEquals("John Doe", u.getName());
    assertEquals("john@example.com", u.getEmail());
    assertEquals("pass123", u.getPassword());
    assertEquals("male", u.getGender());
    assertEquals("9876543210", u.getPhone());
    assertEquals("123 Street", u.getAddress());
    assertEquals("Customer", u.getRole());
}

@Test
public void testSetters() {
    user u = new user();

    u.setName("Jane");
    u.setEmail("jane@example.com");
    u.setPassword("secure");
    u.setGender("female");
    u.setPhone("1234567890");
    u.setAddress("456 Road");
    u.setRole("Admin");

    assertEquals("Jane", u.getName());
    assertEquals("jane@example.com", u.getEmail());
    assertEquals("secure", u.getPassword());
    assertEquals("female", u.getGender());
    assertEquals("1234567890", u.getPhone());
    assertEquals("456 Road", u.getAddress());
    assertEquals("Admin", u.getRole());
}

@Test
public void testToString() {
    user u = new user("Test", "test@example.com", "abc", "male", "1112223333", "Test Address", "Customer");
    String expected = "user [name=Test, email=test@example.com, password=abc, gender=male, phone=1112223333, address=Test Address, role=Customer]";
    assertEquals(expected, u.toString());
}
}