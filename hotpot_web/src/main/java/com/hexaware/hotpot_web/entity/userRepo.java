package com.hexaware.hotpot_web.entity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<user, String> {

	long countByRole(String string);

}
