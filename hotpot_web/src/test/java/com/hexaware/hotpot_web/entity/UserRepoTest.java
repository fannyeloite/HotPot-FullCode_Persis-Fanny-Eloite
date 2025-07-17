package com.hexaware.hotpot_web.entity;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserRepoTest {

    @Autowired
    private userRepo userRepo;

    @Test
    void testUserRepoIsNotNull() {
        assertNotNull(userRepo, "userRepo should not be null");
    }
}
