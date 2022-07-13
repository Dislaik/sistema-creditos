package com.system.credits.service;

import com.system.credits.entity.Credit;
import com.system.credits.entity.Person;
import com.system.credits.entity.Simulation;
import com.system.credits.entity.User;
import com.system.credits.repository.CreditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CreditService {

    @Autowired
    CreditRepository creditRepository;

    public List<Credit> findAll() {

        return creditRepository.findAll();
    }

    public Optional<Credit> findById(Integer id) {

        return creditRepository.findById(id);
    }

    public Credit save(Credit credit) {

        return creditRepository.save(credit);
    }

    public void delete(Credit credit) {

        creditRepository.delete(credit);
    }
}
