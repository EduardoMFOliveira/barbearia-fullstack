package com.barbearia.backend.service;

import com.barbearia.backend.model.Servico;
import com.barbearia.backend.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {
    @Autowired
    private ServicoRepository servicoRepository;

    public List<Servico> listarServicos() {
        return servicoRepository.findAll();
    }

    public Servico salvarServico(Servico servico) {
        return servicoRepository.save(servico);
    }
}