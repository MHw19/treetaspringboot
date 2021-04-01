package com.example.shoppingcart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.shoppingcart.dto.UserObj;
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
	
	@PostMapping("/")
	public User addUser(@RequestBody User user) {
	
		return userService.addAUser(user);
	}
	
	@PutMapping("/")
	public void updateUser(@RequestBody User user) {
		
		userService.updateUser(user);
	}
	
	@GetMapping("/getUserByName/{name}")
	public List<UserObj> getUserByName(@PathVariable String name) {
		
		return userService.getUsersByName(name);
	}
	
}
