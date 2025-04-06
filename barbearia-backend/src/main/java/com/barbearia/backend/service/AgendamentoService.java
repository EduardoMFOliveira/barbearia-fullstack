package com.barbearia.backend.service;

import com.barbearia.backend.model.Agendamento;
import com.barbearia.backend.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendamentoService {
    @Autowired
    private AgendamentoRepository agendamentoRepository;

    public List<Agendamento> listarAgendamentos() {
        return agendamentoRepository.findAll();
    }

    public Agendamento salvarAgendamento(Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }
}