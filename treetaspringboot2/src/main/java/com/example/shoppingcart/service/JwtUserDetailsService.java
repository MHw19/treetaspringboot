package com.example.shoppingcart.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.shoppingcart.controller.JwtAuthenticationController;


@Service
public class JwtUserDetailsService implements UserDetailsService {

	
	@Autowired
	UserService userService;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
		
	com.example.shoppingcart.entity.User u	= userService.getByuserNamePassword(username,JwtAuthenticationController.pw);

		String encodedPw= encoder.encode(JwtAuthenticationController.pw);
		
		if (u !=null) {
			
			System.out.println("username"+u.getUsername());
			
			return new User("javainuse",encodedPw,
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

}