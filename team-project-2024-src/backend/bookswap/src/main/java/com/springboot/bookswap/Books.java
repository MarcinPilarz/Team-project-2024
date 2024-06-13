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
@Table(name = "books")
public class Books {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long BookID;
	
	@Column(length = 45)
	private String title;
	
	@Column(length = 45)
	private String category;
	
	@Column(length = 45)
	private String yearOfPublication;
	
	@Column(length = 45)
	private String description;
	
	@Column(length = 45)
	private String bookCondition;
	
	@ManyToOne
    @JoinColumn(name = "UserID")
    private Users user;
}
