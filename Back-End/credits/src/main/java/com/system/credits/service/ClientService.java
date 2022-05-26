package com.system.credits.service;

import com.system.credits.entity.Client;
import com.system.credits.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public Optional<Client> getByRun(String run) {
        return clientRepository.findByRun(run);
    }

    public Boolean existsByRun(String run) {
        return clientRepository.existsByRun(run);
    }

    public void save(Client client) {
        clientRepository.save(client);
    }
}
