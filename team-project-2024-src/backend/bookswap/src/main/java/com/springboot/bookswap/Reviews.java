package com.springboot.bookswap;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "reviews")
public class Reviews {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ReviewID;
	
	@Column(length = 45)
	private int rating;
	
	@Column(length = 45)
	private String text;
	
	@Temporal(TemporalType.DATE)
	private Date reviewDate;
	
	@ManyToMany(mappedBy = "reviews")
    private List<Users> users;

	public long getReviewID() {
		return ReviewID;
	}

	public void setReviewID(long reviewID) {
		ReviewID = reviewID;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Date getReviewDate() {
		return reviewDate;
	}

	public void setReviewDate(Date reviewDate) {
		this.reviewDate = reviewDate;
	}

	public List<Users> getUsers() {
		return users;
	}

	public void setUsers(List<Users> users) {
		this.users = users;
	}
	
	
}
