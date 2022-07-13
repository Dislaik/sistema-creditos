package com.system.credits.controller;

import com.system.credits.dto.ConfigUser;
import com.system.credits.entity.Person;
import com.system.credits.entity.User;
import com.system.credits.service.PersonService;
import com.system.credits.service.UserService;
import com.system.credits.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/config")
@CrossOrigin(origins = "http://localhost:4200")
public class ConfigController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @Autowired
    PersonService personService;

    @PutMapping("by-username/{username}")
    public ResponseEntity<ConfigUser> updateByUsername(@PathVariable String username, @RequestBody ConfigUser update) {
        User user = userService.findByUsername(username).get();
        Person person = personService.findByRun(user.getPerson().getRun()).get();

        person.setAddress(update.getAddress());
        if (!user.getPassword().equals(update.getPassword())) {
            Integer passwordLength = update.getPassword().length();
            if (passwordLength < 4 || passwordLength > 16) {
                return new ResponseEntity(new Response("La contraseña debe ser entre 4-16 caracteres."), HttpStatus.BAD_REQUEST);
            }
            user.setPassword(passwordEncoder.encode(update.getPassword()));
        }
        user.setEmail(update.getEmail());
        person.setPhone(update.getPhone());

        userService.save(user);
        personService.save(person);

        return new ResponseEntity(new Response("Los cambios se guardaron con exito!"), HttpStatus.OK);
    }
}
