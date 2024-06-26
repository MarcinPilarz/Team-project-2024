package com.springboot.bookswap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.bookswap.Users;
import com.springboot.bookswap.repository.UsersRepository;

@Service
public class UsersService implements MainService<Users> {

	@Autowired
	private UsersRepository usersRepository;
	
	@Override
	public List<Users> findAllItems() {
		return usersRepository.findAll();
	}

	@Override
	public void addItem(Users object) {
		usersRepository.save(object);
	}

	@Override
	public void deleteItem(Users object) {
		usersRepository.delete(object);
	}

	@Override
	public void updateItem(Users object) {
		usersRepository.save(object);
	}

	@Override
	public Users findById(Long id) {
		return usersRepository.findById(id).orElseThrow();
	}

//	@Override
//	public Users findByName(String name) {
//		return usersRepository.findByName(name).orElseThrow();
//	}

}
