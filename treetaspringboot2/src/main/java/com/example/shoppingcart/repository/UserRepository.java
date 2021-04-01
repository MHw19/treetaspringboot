package com.example.shoppingcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.shoppingcart.dto.UserObj;
import com.example.shoppingcart.entity.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("SELECT new com.example.shoppingcart.dto.UserObj(u.id,u.name,u.phone,u.username,u.age) FROM User u WHERE u.name LIKE %?1% ")
	List<UserObj> getUserByName(String name);
}
