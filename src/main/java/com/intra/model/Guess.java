package com.intra.model;

import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Guess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private int guessUtilisateur;

    private int guessRandom;

    public Guess() {
    }

    public Guess(String name, int guessUtilisateur, int guessRandom) {
        this.name = name;
        this.guessUtilisateur = guessUtilisateur;
        this.guessRandom = guessRandom;
    }
}
