package com.springboot.bookswap.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.bookswap.Books;

public interface BooksRepository extends JpaRepository<Books, Long> {
	//Optional<Books> findByName(String name);
}
