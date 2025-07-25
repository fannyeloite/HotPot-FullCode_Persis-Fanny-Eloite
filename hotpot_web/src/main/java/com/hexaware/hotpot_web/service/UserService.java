package com.hexaware.hotpot_web.service;

import com.hexaware.hotpot_web.entity.user;
import java.util.List;
import java.util.Optional;

public interface UserService {
user addUser(user u);
List<user> getAllUsers();
Optional<user> getUserByEmail(String email);
user updateUser(String email, user u);
boolean deleteUser(String email);
boolean userExists(String email);
}