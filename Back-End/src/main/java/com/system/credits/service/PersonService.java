package com.system.credits.service;

import com.system.credits.entity.Person;
import com.system.credits.entity.User;
import com.system.credits.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
//@Transactional
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getPersons() {

        return personRepository.findAll();
    }

    public Optional<Person> findById(Integer id) {
        return personRepository.findById(id);
    }

    public Optional<Person> findByRun(String run) {
        return personRepository.findByRun(run);
    }

    /*public Optional<Person> findByUsername(String username) {
        return personRepository.findByUsername(username);
    }*/
    /*public Optional<Person> findByUser(User user) {
        return personRepository.findByUser(user);
    }*/

    public Boolean existsByRun(String run) {
        return personRepository.existsByRun(run);
    }

    public Person save(Person person) {
        return personRepository.save(person);
    }
}
