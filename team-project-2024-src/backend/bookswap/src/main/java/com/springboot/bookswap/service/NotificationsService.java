package com.springboot.bookswap.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.bookswap.Notifications;
import com.springboot.bookswap.repository.NotificationsRepository;

@Service
public class NotificationsService implements MainService<Notifications> {

	@Autowired
	private NotificationsRepository	notificationsRepository;
	
	@Override
	public List<Notifications> findAllItems() {
		return notificationsRepository.findAll();
	}

	@Override
	public void addItem(Notifications object) {
		notificationsRepository.save(object);
	}

	@Override
	public void deleteItem(Notifications object) {
		notificationsRepository.delete(object);
	}

	@Override
	public void updateItem(Notifications object) {
		notificationsRepository.save(object);
	}

	@Override
	public Notifications findById(Long id) {
		return notificationsRepository.findById(id).orElseThrow();
	}

//	@Override
//	public Notifications findByName(String name) {
//		return notificationsRepository.findByName(name).orElseThrow();
//	}

}
