package com.springboot.bookswap.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.bookswap.Notifications;

public interface NotificationsRepository extends JpaRepository<Notifications, Long> {
	//Optional<Notifications> findByName(String name);
}