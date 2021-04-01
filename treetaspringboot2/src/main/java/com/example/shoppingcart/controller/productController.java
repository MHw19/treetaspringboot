package com.example.shoppingcart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shoppingcart.dto.ProductObj;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.service.productService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/products")
public class productController {

    @Autowired
    productService productService;

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @DeleteMapping("/deleteProduct/{id}")
    public String deleteProduct(@PathVariable int id){
        return productService.deleteProduct(id);
    }
    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product){
        return productService.updateProduct(product);
    }
    @GetMapping("/getProducts")
    public List<ProductObj> getProducts(){
    return productService.getCustomProductList();
    }

    @GetMapping("/getProduct")
    public List<Product> getProduct(){
    return productService.getProductList();
    }
}
