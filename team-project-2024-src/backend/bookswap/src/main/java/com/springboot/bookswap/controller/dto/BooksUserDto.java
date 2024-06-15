package com.springboot.bookswap.controller.dto;

public record BooksUserDto(long BookID,
		String title,
		String category,
		String yearOfPublication,
		String description,
		String bookCondition,
		long UserID, 
		String firstName, 
		String lastName,
		String email,
		String password,
		String shippingAddress,
		String phoneNumber) {

}
