package com.springboot.bookswap.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.bookswap.Exchanges;

public interface ExchangesRepository extends JpaRepository<Exchanges, Long> {
	//Optional<Exchanges> findByName(String name);
}
