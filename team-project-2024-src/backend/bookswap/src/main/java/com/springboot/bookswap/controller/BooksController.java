package com.springboot.bookswap.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.bookswap.controller.dto.BooksDto;
import com.springboot.bookswap.controller.dto.BooksUserDto;
import com.springboot.bookswap.service.BooksService;

@RestController
public class BooksController {
	
	@Autowired
	private BooksService booksService;

	@GetMapping("/books")
	public List<BooksDto> getBooksDto(){
		return booksService.findAllItems().stream()
				.map(books -> new BooksDto(books.getBookID(),
						books.getTitle(),
						books.getCategory(),
						books.getYearOfPublication(),
						books.getDescription(),
						books.getBookCondition()))
						.collect(Collectors.toList());
	}
	
	@GetMapping("/books/users")
	public List<BooksUserDto> getBooksUsersDto(){
		return booksService.findAllItems().stream()
				.map(books -> new BooksUserDto(books.getBookID(),
						books.getTitle(),
						books.getCategory(),
						books.getYearOfPublication(),
						books.getDescription(),
						books.getBookCondition(),
						books.getUser().getUserID(),
						books.getUser().getFirstName(),
						books.getUser().getLastName(),
						books.getUser().getEmail(),
						books.getUser().getPassword(),
						books.getUser().getShippingAddress(),
						books.getUser().getPhoneNumber()))
						.collect(Collectors.toList());
	}
}
