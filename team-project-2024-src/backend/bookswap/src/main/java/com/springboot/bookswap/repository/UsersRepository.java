package com.springboot.bookswap.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.bookswap.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
	//Optional<Users> findByName(String name);
}
