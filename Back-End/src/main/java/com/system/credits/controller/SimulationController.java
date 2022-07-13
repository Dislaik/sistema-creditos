package com.system.credits.controller;

import com.system.credits.dto.ConfigUser;
import com.system.credits.dto.NewUser;
import com.system.credits.entity.Person;
import com.system.credits.entity.Role;
import com.system.credits.entity.Simulation;
import com.system.credits.entity.User;
import com.system.credits.service.PersonService;
import com.system.credits.service.SimulationService;
import com.system.credits.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/simulations")
@CrossOrigin(origins = "http://localhost:4200")
public class SimulationController {

    @Autowired
    SimulationService simulationService;

    @Autowired
    PersonService personService;

    @GetMapping("")
    public ResponseEntity<List<Simulation>> findAll() {

        return new ResponseEntity(simulationService.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Simulation> create(@RequestBody Simulation simulation) {
        //Role userRole = roleService.getByRole("cliente").get();
        //Person person = personService.
        Person person = personService.findByRun(simulation.getIdPerson().getRun()).get();
        simulation.setIdPerson(person);
        /*System.out.println(simulation.getStatus());
        System.out.println(simulation.getCivilStatus());
        System.out.println(simulation.getIdPerson().getRun());
        System.out.println(simulation.getLienInsurance());*/

        return new ResponseEntity(simulationService.save(simulation), HttpStatus.OK);
    }

    @PutMapping("by-id/{id}")
    public ResponseEntity<Simulation> updateById(@PathVariable Integer id, @RequestBody Simulation update) {
        Simulation simulation = simulationService.findById(id).get();

        simulation = update;


        return new ResponseEntity<Simulation>(simulationService.save(simulation), HttpStatus.OK);
    }
}
