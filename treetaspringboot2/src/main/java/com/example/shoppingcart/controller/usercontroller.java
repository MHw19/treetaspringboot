package com.example.shoppingcart.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/myusers")


public class usercontroller {

	@GetMapping("/")
	public String getuser() {
		
		return "welcome.. Treeta group spring boot project";
		
		
	}
	
	
}
