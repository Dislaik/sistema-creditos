package com.system.credits.repository;


import com.system.credits.entity.Credit;
import com.system.credits.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CreditRepository extends JpaRepository<Credit, Integer> {

}
