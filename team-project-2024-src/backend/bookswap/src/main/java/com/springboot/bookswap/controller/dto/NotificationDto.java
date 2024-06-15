package com.springboot.bookswap.controller.dto;

public record NotificationDto(long NotificationID,
		String type,
		String message,
		boolean dataReceived) {

}
