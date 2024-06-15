package com.springboot.bookswap;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "notifications")
public class Notifications {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long NotificationID;
	
	@Column(length = 45)
	private String type;
	
	@Column(length = 45)
	private String message;
	
	@Column(length = 45)
	private boolean dataReceived;
	
	@ManyToOne
	@JoinColumn(name = "UserID")
	private Users user;

	public long getNotificationID() {
		return NotificationID;
	}

	public void setNotificationID(long notificationID) {
		NotificationID = notificationID;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isDataReceived() {
		return dataReceived;
	}

	public void setDataReceived(boolean dataReceived) {
		this.dataReceived = dataReceived;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}
	
	
	
}
