package com.system.credits.service;

import com.system.credits.entity.Person;
import com.system.credits.entity.Simulation;
import com.system.credits.entity.User;
import com.system.credits.repository.SimulationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SimulationService {

    @Autowired
    SimulationRepository simulationRepository;

    public List<Simulation> findAll() {

        return simulationRepository.findAll();
    }

    public Optional<Simulation> findById(Integer id) {

        return simulationRepository.findById(id);
    }

    public Simulation save(Simulation simulation) {
        return simulationRepository.save(simulation);
    }
}
