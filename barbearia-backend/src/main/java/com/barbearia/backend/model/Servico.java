package com.barbearia.backend.model;

import jakarta.persistence.*;

@Entity
public class Servico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private double preco;

    // Getters e Setters
}