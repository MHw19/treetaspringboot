package com.example.shoppingcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.shoppingcart.entity.Product;


@Repository
public interface productRepository extends JpaRepository<Product,Integer> {

}
