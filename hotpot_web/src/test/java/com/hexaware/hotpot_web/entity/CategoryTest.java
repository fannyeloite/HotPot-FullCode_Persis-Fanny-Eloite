package com.hexaware.hotpot_web.entity;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CategoryTest {


@Test
public void testConstructorAndGetters() {
    Category cat = new Category(101, "Savories");

    assertEquals(101, cat.getCategoryId());
    assertEquals("Savories", cat.getCategoryName());
}

@Test
public void testSetters() {
    Category cat = new Category();

    cat.setCategoryId(202);
    cat.setCategoryName("Desserts");

    assertEquals(202, cat.getCategoryId());
    assertEquals("Desserts", cat.getCategoryName());
}
}