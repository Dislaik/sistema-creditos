package com.system.credits.repository;

import com.system.credits.entity.Person;
import com.system.credits.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
    Optional<Person> findByRun(String run);
    //Optional<Person> findByUsername(String username);
    //Optional<Person> findByUser(User user);
    Boolean existsByRun(String run);
}
