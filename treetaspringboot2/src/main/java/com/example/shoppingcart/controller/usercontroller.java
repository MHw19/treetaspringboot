package com.example.shoppingcart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.shoppingcart.entity.User;
import com.example.shoppingcart.service.UserService;

import java.util.List;


@RestController
@RequestMapping("/user")


public class usercontroller {

	@Autowired
	UserService userService;
	
	@GetMapping("/hello")
	public String getHello() {
		
		return "welcome.. Treeta group spring boot project";	
		
	}
	
	@GetMapping("/")
	public List<User> getAllUsers() {
		
		return userService.getAllUsers();
	}
	
	@PostMapping("/")
	public User addUser(@RequestBody User user) {
	
		return userService.addAUser(user);
	}
	
	
}
