package com.system.credits.controller;

import com.system.credits.entity.Person;
import com.system.credits.entity.User;
import com.system.credits.service.UserService;
import com.system.credits.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("")
    public ResponseEntity<List<User>> findAll() {

        return new ResponseEntity(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("by-username/{username}")
    public ResponseEntity<User> findByUsername(@PathVariable String username) {

        return new ResponseEntity(userService.findByUsername(username), HttpStatus.OK);
    }

    @PutMapping("by-username/{username}")
    public ResponseEntity<User> updateByUsername(@PathVariable String username, @RequestBody User updateUser) {
        User user = userService.findByUsername(username).get();

        if (userService.existsByUsername(updateUser.getUsername()) && !user.getUsername().equals(updateUser.getUsername())) {
            return new ResponseEntity(new Response("Este nombre de usuario se encuentra ocupado."), HttpStatus.BAD_REQUEST);
        }
        user.setUsername(updateUser.getUsername());

        /*Integer passwordLength = updateUser.getPassword().length();
        if (passwordLength < 4 || passwordLength > 16) {
            return new ResponseEntity(new Response("La contraseña debe ser entre 4-16 caracteres."), HttpStatus.BAD_REQUEST);
        }*/
        if (!user.getPassword().equals(updateUser.getPassword())) {
            Integer passwordLength = updateUser.getPassword().length();
            if (passwordLength < 4 || passwordLength > 16) {
                return new ResponseEntity(new Response("La contraseña debe ser entre 4-16 caracteres."), HttpStatus.BAD_REQUEST);
            }
            user.setPassword(passwordEncoder.encode(updateUser.getPassword()));
        }

        /*if (userService.existsByEmail(updateUser.getEmail()) && !user.getEmail().equals(updateUser.getEmail())) {
            return new ResponseEntity(new Response("Este correo electronico se encuentra ocupado."), HttpStatus.BAD_REQUEST);
        }*/
        user.setEmail(updateUser.getEmail());



        return new ResponseEntity(userService.save(user), HttpStatus.OK);
    }

    @DeleteMapping("by-username/{username}")
    public ResponseEntity delete(@PathVariable String username) {
        User user = userService.findByUsername(username).get();


        userService.delete(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }

}
