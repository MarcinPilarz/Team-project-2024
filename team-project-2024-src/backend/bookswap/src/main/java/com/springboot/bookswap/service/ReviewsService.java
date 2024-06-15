package com.springboot.bookswap.service;import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.bookswap.Reviews;
import com.springboot.bookswap.repository.ReviewsRepository;

@Service
public class ReviewsService implements MainService<Reviews> {

	@Autowired
	private ReviewsRepository reviewsRepository;
	
	@Override
	public List<Reviews> findAllItems() {
		return reviewsRepository.findAll();
	}

	@Override
	public void addItem(Reviews object) {
		reviewsRepository.save(object);
	}

	@Override
	public void deleteItem(Reviews object) {
		reviewsRepository.delete(object);
		
	}

	@Override
	public void updateItem(Reviews object) {
		reviewsRepository.save(object);
	}

	@Override
	public Reviews findById(Long id) {
		return reviewsRepository.findById(id).orElseThrow();
	}

//	@Override
//	public Reviews findByName(String name) {
//		return reviewsRepository.findByName(name).orElseThrow();
//	}

}
