package com.barbearia.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataHora;

    @ManyToOne
    private Cliente cliente;

    @ManyToOne
    private Servico servico;

    // Getters e Setters
}