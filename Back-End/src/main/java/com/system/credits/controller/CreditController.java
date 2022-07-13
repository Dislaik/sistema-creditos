package com.system.credits.controller;

import com.system.credits.entity.Credit;
import com.system.credits.entity.Person;
import com.system.credits.entity.Simulation;
import com.system.credits.service.CreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/credits")
@CrossOrigin(origins = "http://localhost:4200")
public class CreditController {

    @Autowired
    CreditService creditService;

    @GetMapping("")
    public ResponseEntity<List<Credit>> findAll() {

        return new ResponseEntity(creditService.findAll(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Credit> create(@RequestBody Credit credit) {

        return new ResponseEntity(creditService.save(credit), HttpStatus.OK);
    }

    @DeleteMapping("by-id/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Credit credit = creditService.findById(id).get();

        creditService.delete(credit);
        return new ResponseEntity(credit, HttpStatus.OK);
    }


    /*@DeleteMapping("by-username/{username}")
    public ResponseEntity delete(@PathVariable String username) {
        User user = userService.findByUsername(username).get();


        userService.delete(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }*/
}
