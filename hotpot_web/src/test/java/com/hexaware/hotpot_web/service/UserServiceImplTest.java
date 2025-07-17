package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.user;
import com.hexaware.hotpot_web.entity.userRepo;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceImplTest {

    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private userRepo userRepo;

    @Mock
    private BCryptPasswordEncoder encoder;

    @Test
    void testAddUser_PasswordEncoded() {
        user u = new user();
        u.setPassword("plain123");

        when(encoder.encode("plain123")).thenReturn("encoded123");
        when(userRepo.save(any(user.class))).thenReturn(u);

        user result = userService.addUser(u);

        assertEquals("encoded123", result.getPassword());
    }

    @Test
    void testDeleteUser() {
        when(userRepo.existsById("test@mail.com")).thenReturn(true);
        boolean deleted = userService.deleteUser("test@mail.com");
        assertTrue(deleted);
        verify(userRepo).deleteById("test@mail.com");
    }
}
