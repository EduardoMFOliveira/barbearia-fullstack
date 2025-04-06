package com.barbearia.backend.service;

import com.barbearia.backend.model.Cliente;
import com.barbearia.backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Cliente salvarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}