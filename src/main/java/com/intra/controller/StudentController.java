package com.intra.controller;

import com.intra.model.Guess;
import com.intra.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping(path = "/guess/addGuess")
        public Guess saveGuess(@RequestBody Guess guess) {
           return service.saveGuess(guess);
    }

    @GetMapping(path = "/guess/getAllGuess")
        public List<Guess> getAllGuess() {
            return service.getAllGuess();
    }




}
