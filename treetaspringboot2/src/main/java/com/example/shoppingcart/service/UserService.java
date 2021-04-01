package com.example.shoppingcart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shoppingcart.dto.UserObj;
import com.example.shoppingcart.entity.User;
import com.example.shoppingcart.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

	@Autowired
	UserRepository userRepo;
	
	public User addAUser(User user) {
		return userRepo.save(user);
	}
	
	public User updateUser(User user) {
		
		User avlUser= userRepo.findById(user.getId()).orElse(null);
		
		if(avlUser!=null) {
			avlUser.setAge(user.getAge());
			avlUser.setName(user.getName());
			avlUser.setPassword(avlUser.getPassword());
			avlUser.setPhone(user.getPhone());
			avlUser.setUsername(user.getUsername());
			
			avlUser=userRepo.save(avlUser);
		}
		
		return avlUser;
	}
	
	public List<UserObj> getUsersByName(String name) {
		
		return userRepo.getUserByName(name);
	}

}
