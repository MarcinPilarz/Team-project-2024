package com.springboot.bookswap.controller.dto;

public record UsersDto(long UserID, 
		String firstName, 
		String lastName,
		String email,
		String password,
		String shippingAddress,
		String phoneNumber) {

}
