package com.springboot.bookswap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.bookswap.Exchanges;
import com.springboot.bookswap.repository.ExchangesRepository;

@Service
public class ExchangesService implements MainService<Exchanges> {

	@Autowired
	private ExchangesRepository	exchangesRepository;
	
	@Override
	public List<Exchanges> findAllItems() {
		return exchangesRepository.findAll();
	}

	@Override
	public void addItem(Exchanges object) {
		exchangesRepository.save(object);
	}

	@Override
	public void deleteItem(Exchanges object) {
		exchangesRepository.delete(object);
		
	}

	@Override
	public void updateItem(Exchanges object) {
		exchangesRepository.save(object);
		
	}

	@Override
	public Exchanges findById(Long id) {
		return exchangesRepository.findById(id).orElseThrow();
	}

//	@Override
//	public Exchanges findByName(String name) {
//		return exchangesRepository.findByName(name).orElseThrow();
//	}
	
}
