package com.example.shoppingcart.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shoppingcart.dto.ProductObj;
import com.example.shoppingcart.entity.Category;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.repository.categoryrepository;
import com.example.shoppingcart.repository.productRepository;

@Service
public class productService {
	@Autowired
    private productRepository productRepository;
	@Autowired
	categoryrepository categoryrepository;

    public Product addProduct(Product product, int id) {
    	
    	
    	Category category=categoryrepository.findById(id).orElse(null);
    	
    	product.setCategory(category);
        return productRepository.save(product);
    }

    public String deleteProduct(int id) {
     
    	  String string = "No Product Deleted";
          Product product = productRepository.findById(id).orElse(null);
          if (product != null) {
              try {
                  productRepository.delete(product);
                  string = "Product " + product.getProductname() + " Deleted";
              } catch (Exception e) {
                  e.printStackTrace();
                  string = "This Product Can Not Be Deleted";
              }
          }
          return string;
    }

    public Product updateProduct(Product product) {
        Product savedProduct = productRepository.findById(product.getId()).orElse(null);
        if (savedProduct != null) {
        	
        	savedProduct.setProductname(product.getProductname());
        	savedProduct.setBuyPrice(product.getBuyPrice());
        	savedProduct.setDescription(product.getDescription());
        	savedProduct.setSellPrice(product.getSellPrice());
            savedProduct.setQty(product.getQty());         
            productRepository.save(savedProduct);
            
            System.out.println(savedProduct.getProductname());
        }
        return savedProduct;
    }
    
    public List<ProductObj> getCustomProductList(){
        List<Product> productList = productRepository.findAll();
        List<ProductObj> customProductList  = new ArrayList<>();
        for(Product p : productList){
            customProductList.add(new ProductObj(p.getId(),p.getProductname(),p.getDescription(),p.getBuyPrice(),p.getSellPrice(),p.getQty(),p.getCategory().getCatname()));
        }
        return customProductList;
    }
    
    
    public Product searchbyprdid(int id){
		   
		   
		   return  productRepository.findById(id).orElse(null);
		   
		   
	     }
    
    
    
    
    
    public List<Product> getProductList() {
        return productRepository.findAll();
    }


}
