package com.springboot.bookswap;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long UserID;
	
	@Column(length = 45)
	private String firstName;
	
	@Column(length = 45)
	private String lastName;
	
	@Column(length = 45)
	private String email;
	
	@Column(length = 45)
	private String password;
	
	@Column(length = 45)
	private String shippingAddress;
	
	@Column(length = 45)
	private String phoneNumber;
	
	@ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "user_exchange", 
        joinColumns = { @JoinColumn(name = "UserID") }, 
        inverseJoinColumns = { @JoinColumn(name = "ExchangeID") }
    )
    private List<Exchanges> exchanges;
	
	@ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "user_reviews", 
        joinColumns = { @JoinColumn(name = "UserID") }, 
        inverseJoinColumns = { @JoinColumn(name = "ReviewID") }
    )
    private List<Reviews> reviews;
	
	@OneToMany(mappedBy = "user")
	private List<Notifications> notifications;
	
	@OneToMany(mappedBy = "user")
    private List<Books> books;

	public long getUserID() {
		return UserID;
	}

	public void setUserID(long userID) {
		UserID = userID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public List<Exchanges> getExchanges() {
		return exchanges;
	}

	public void setExchanges(List<Exchanges> exchanges) {
		this.exchanges = exchanges;
	}

	public List<Reviews> getReviews() {
		return reviews;
	}

	public void setReviews(List<Reviews> reviews) {
		this.reviews = reviews;
	}

	public List<Notifications> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notifications> notifications) {
		this.notifications = notifications;
	}

	public List<Books> getBooks() {
		return books;
	}

	public void setBooks(List<Books> books) {
		this.books = books;
	}
	
	
}
