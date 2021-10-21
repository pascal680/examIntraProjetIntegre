package com.intra.repository;

import com.intra.model.Guess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuessRepository extends JpaRepository<Guess,Integer> {

}
