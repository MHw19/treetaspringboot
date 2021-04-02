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
	
	public String updateUser(User user) {
		
		User avlUser= userRepo.findById(user.getId()).orElse(null);
		
		String message="";
		
		if(avlUser!=null) {
			avlUser.setAge(user.getAge());
			avlUser.setName(user.getName());
			avlUser.setPassword(avlUser.getPassword());
			avlUser.setPhone(user.getPhone());
			avlUser.setUsername(user.getUsername());
			
			userRepo.save(avlUser);
			message="Updated successfully!!";
		}else {
			message="No such user";
		}
		
		return message;
	}
	
	public List<UserObj> getUsersByName(String name) {
		
		return userRepo.getUserByName(name);
	}
	
	public List<UserObj> getUsers(){
		return userRepo.getUsersWithoutPassword();
	}
	
	public String deleteUser(int id) {
		User avlUser= userRepo.findById(id).orElse(null);
		
		String message="";
		if(avlUser!=null) {
			userRepo.delete(avlUser);
			message="Successfully deleted !!";
		}else {
			message="No such User";
		}
		return message;
	}

}
