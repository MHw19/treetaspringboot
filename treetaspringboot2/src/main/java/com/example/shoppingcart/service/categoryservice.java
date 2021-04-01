package com.example.shoppingcart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shoppingcart.entity.Category;
import com.example.shoppingcart.repository.categoryrepository;

   @Service
    public class categoryservice {
	
	
	   @Autowired
	   categoryrepository categoryrepository;
	   
	   public List<Category> getcategory(){
		   
		   
		   return  categoryrepository.findAll();
		   
		   
	   }
	
	
	   
	   public Category savecategory(Category category) {
		   
		   
		   
		   return categoryrepository.save(category);
		   
		   
	   }
	   
	   
	   public String deletecataById(int Id) {
			
		   categoryrepository.deleteById(Id);
			
			
			return "Deleted category "+Id;
			
			
		}
	   
	   
	   public Category upadteproduct(Category category) {
		   
		   
		  Category avalcategory =categoryrepository.findById(category.getId()).orElse(null);
		  
		  
		  if(avalcategory !=null) {
			  
			  
			  avalcategory.setCatname(category.getCatname());
			  avalcategory.setDescription(category.getDescription());
			  
			  
		  }
		  
		  return categoryrepository.save(avalcategory);
		  
		   
		   
		   
		   
	   }
	   
	   
	   
	   
	   
	   
	   
	   
	

  }
