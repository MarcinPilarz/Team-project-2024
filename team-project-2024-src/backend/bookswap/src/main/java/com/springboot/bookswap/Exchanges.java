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
@Table(name = "exchanges")
public class Exchanges {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ExchangeID;
	
	@Temporal(TemporalType.DATE)
	private Date exchangeDate;
	
	@Column(length = 45)
	private String status;
	
	@ManyToMany(mappedBy = "exchanges")
    private List<Users> users;

	public long getExchangeID() {
		return ExchangeID;
	}

	public void setExchangeID(long exchangeID) {
		ExchangeID = exchangeID;
	}

	public Date getExchangeDate() {
		return exchangeDate;
	}

	public void setExchangeDate(Date exchangeDate) {
		this.exchangeDate = exchangeDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<Users> getUsers() {
		return users;
	}

	public void setUsers(List<Users> users) {
		this.users = users;
	}
	
	
}
