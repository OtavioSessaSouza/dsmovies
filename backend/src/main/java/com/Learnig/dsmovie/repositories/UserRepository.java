package com.Learnig.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Learnig.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
	User findByEmail(String email);
}
