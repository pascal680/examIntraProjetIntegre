package com.intra.service;

import com.intra.model.Guess;
import com.intra.repository.GuessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private GuessRepository repository;

    public Guess saveGuess(Guess guess) {
        return repository.save(guess);
    }

    public List<Guess> getAllGuess(){
        return repository.findAll();
    }
}
