package com.Learnig.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Learnig.dsmovie.entities.Score;
import com.Learnig.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score,ScorePK>{
	
}
