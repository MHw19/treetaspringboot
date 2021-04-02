package com.example.shoppingcart.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shoppingcart.dto.ProductObj;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.repository.productRepository;

@Service
public class productService {
	@Autowired
    private productRepository productRepository;

    public Product addProduct(Product product) {
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
         
            productRepository.save(savedProduct);
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
    
    public List<Product> getProductList() {
        return productRepository.findAll();
    }


}
