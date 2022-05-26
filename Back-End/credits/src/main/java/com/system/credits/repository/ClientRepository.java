package com.system.credits.repository;

import com.system.credits.entity.Client;
import com.system.credits.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    Optional<Client> findByRun(String run);
    Boolean existsByRun(String run);
}
