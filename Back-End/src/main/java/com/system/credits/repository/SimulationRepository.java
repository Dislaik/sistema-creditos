package com.system.credits.repository;

import com.system.credits.entity.Person;
import com.system.credits.entity.Simulation;
import com.system.credits.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SimulationRepository extends JpaRepository<Simulation, Integer> {

}
