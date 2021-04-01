package com.example.shoppingcart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shoppingcart.entity.User;
import com.example.shoppingcart.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public List<User> getAllUsers(){
		
		return userRepo.findAll();
	}
}
