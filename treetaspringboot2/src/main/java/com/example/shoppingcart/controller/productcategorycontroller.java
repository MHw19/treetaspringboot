package com.example.shoppingcart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.shoppingcart.entity.Category;

import com.example.shoppingcart.service.categoryservice;

@RestController
@RequestMapping("/mycategory")

public class productcategorycontroller {
	
	
	@Autowired
	categoryservice categoryservice;
	
	
	
	
	@GetMapping("/getcata")
	public List<Category> getcategory(){
		
		
		return categoryservice.getcategory();
		
		
	}
	
	@PostMapping("/savecategory")
	public Category savecategory(@RequestBody @RequestParam("catname")String catname,@RequestBody @RequestParam("description")String description){
		
		Category category=new Category();
		category.setCatname(catname);
		category.setDescription(description);
		
		return categoryservice.savecategory(category);
		
		
	}
	
	
	 @DeleteMapping("/deletecataById/{Id}")
	   
	   
	   public String deletecataById(@PathVariable int Id) {
		   
		   
		   
		return categoryservice.deletecataById(Id);   
		   
	   }
	 
	 
	 @PutMapping("/upadtecategory")
     
     public Category upadteproduct(@RequestBody Category category ) {
   	  
   	  
   	  return categoryservice.savecategory(category) ;
   	  
     }
     
	 
	 
	 
	
	
	
	
	
	
	

}
