package com.system.credits.controller;

import com.system.credits.dto.LoginUser;
import com.system.credits.dto.NewUser;
import com.system.credits.dto.TokenUser;
import com.system.credits.entity.Client;
import com.system.credits.entity.Role;
import com.system.credits.entity.User;
import com.system.credits.enums.RoleType;
import com.system.credits.jwt.Provider;
import com.system.credits.service.ClientService;
import com.system.credits.service.RoleService;
import com.system.credits.service.UserService;
import com.system.credits.utils.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @Autowired
    ClientService clientService;

    @Autowired
    Provider provider;

    @PostMapping("/register")
    public ResponseEntity register(@Valid @RequestBody NewUser newUser, BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return new ResponseEntity("bindingResult error", HttpStatus.BAD_REQUEST);
        }

        String[] runSplit = newUser.getRun().split("-");
        String username = runSplit[0].replace(".", "");

        if (userService.existsByUsername(username)) {
            return new ResponseEntity(new Response("Este usuario ya existe"), HttpStatus.BAD_REQUEST);
        }
        /*if (userService.existsByDocument(newUser.getDocument()) {
            return new ResponseEntity(new Response("Nº de Serie o Documenta ya registrado"), HttpStatus.BAD_REQUEST);
        }*/
        if (userService.existsByEmail(newUser.getEmail())) {
            return new ResponseEntity("El correo ya esta en uso", HttpStatus.BAD_REQUEST);
        }

        User user = new User(username, passwordEncoder.encode(newUser.getPassword()), newUser.getEmail());
        Role clientRole = roleService.getByRoleType(RoleType.Client).get();
        user.setRole(clientRole);

        userService.save(user);

        Client client = new Client(newUser.getRun(), newUser.getDocument(), newUser.getFirstName(), newUser.getMiddleName(),
                newUser.getPaternalLastName(), newUser.getMaternalLastName(), newUser.getDateOfBirth(), newUser.getPhone(),
                newUser.getRegion(), newUser.getCity(), newUser.getAddress());
        client.setUser(user);

        clientService.save(client);

        return new ResponseEntity(new Response("Usuario creado"), HttpStatus.CREATED);
    }



    @PostMapping("/login")
    public ResponseEntity<TokenUser> login(@Valid @RequestBody LoginUser loginUser, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity("bindingResult error", HttpStatus.BAD_REQUEST);
        }

        if (!userService.existsByUsername(loginUser.getUsername())) {
            return new ResponseEntity("El usuario no existe", HttpStatus.NOT_FOUND);
        }

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = provider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        TokenUser tokenUser = new TokenUser(jwt, userDetails.getUsername(), userDetails.getAuthorities());
        System.out.println(userDetails.getAuthorities());

        return new ResponseEntity(tokenUser, HttpStatus.OK);
    }
}
