package com.springboot.bookswap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.bookswap.Books;
import com.springboot.bookswap.repository.BooksRepository;

@Service
public class BooksService implements MainService<Books> {

	@Autowired
	private BooksRepository booksRepository;
	
	@Override
	public List<Books> findAllItems() {
		return booksRepository.findAll();
	}

	@Override
	public void addItem(Books object) {
		booksRepository.save(object);
		
	}

	@Override
	public void deleteItem(Books object) {
		booksRepository.delete(object);
		
	}

	@Override
	public void updateItem(Books object) {
		booksRepository.save(object);
		
	}

	@Override
	public Books findById(Long id) {
		return booksRepository.findById(id).orElseThrow();
	}

//	@Override
//	public Books findByName(String name) {
//		return booksRepository.findByName(name).orElseThrow();
//	}

}
