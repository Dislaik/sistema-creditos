package com.system.credits.controller;

import com.system.credits.dto.NewUser;
import com.system.credits.entity.Person;
import com.system.credits.entity.Role;
import com.system.credits.entity.User;
import com.system.credits.service.PersonService;
import com.system.credits.service.UserService;
import com.system.credits.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/persons")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {
    @Autowired
    PersonService personService;

    @Autowired
    UserService userService;

    @GetMapping("")
    public ResponseEntity<List<Person>> getAllPersons() {

        return new ResponseEntity(personService.getPersons(), HttpStatus.OK);
    }

    /*@PostMapping("by-username/{username}")
    public ResponseEntity<Person> findByUsername(@PathVariable String username, @RequestBody Person updatePerson) {

        User user = userService.findByUsername(username).get();
        Person person = user.getPerson();
        person.setAddress(updatePerson.getAddress());


        return new ResponseEntity(personService.save(person), HttpStatus.OK);
    }*/

    @PutMapping("by-username/{username}")
    public ResponseEntity<Person> updatePerson(@PathVariable String username, @RequestBody Person updatePerson) {
        User user = userService.findByUsername(username).get();

        Person person = user.getPerson();
        person.setAddress(updatePerson.getAddress());


        return new ResponseEntity(personService.save(person), HttpStatus.OK);
    }

}
