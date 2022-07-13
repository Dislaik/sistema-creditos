package com.system.credits;

import com.system.credits.entity.Person;
import com.system.credits.entity.Role;
import com.system.credits.entity.User;
import com.system.credits.repository.PersonRepository;
import com.system.credits.repository.RoleRepository;
import com.system.credits.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class CreditsApplication implements CommandLineRunner {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PersonRepository personRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(CreditsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception
    {
        Role cliente = new Role("cliente");
        Role vendedor = new Role("vendedor");
        Role evaluador = new Role("evaluador");
        Role riesgo = new Role("riesgo");
        Role finanza = new Role("finanza");
        Role cobranza = new Role("cobranza");
        Role informatica = new Role("informatica");

        if (roleRepository.findAll().isEmpty()) {
            roleRepository.save(cliente);
            roleRepository.save(vendedor);
            roleRepository.save(evaluador);
            roleRepository.save(riesgo);
            roleRepository.save(finanza);
            roleRepository.save(cobranza);
            roleRepository.save(informatica);
        }

        Person cliente1 = new Person("20.349.272-3", "519.138.609", "Matías", "Nicolás", "Salas", "Sepúlveda", "2000-01-06", 930853894, "Maule", "Constitución", "Santa Maria #660");
        Person cliente2 = new Person("17.787.884-7", "478.144.567", "Hiter", "Hernán", "Faúndez", "Márquez", "2000-08-16", 931474550, "Maule", "Talca", "Chepeles #400");
        Person cliente3 = new Person("17.869.108-2", "798.546.123", "Claudio", "Alonso", "Guenante", "San Martín", "2000-03-13", 956478315, "Maule", "Talca", "Cerro alto #570");
        Person vendedor1 = new Person("19.298.052-6", "482.557.578", "Fiorella", "Andrea", "Pérez", "Charrasco", "1992-04-21", 945127845, "Maule", "Talca", "2 Norte 1/6 Oriente #310");
        Person evaluador1 = new Person("14.211.953-6", "784.548.650", "Alejandro", "Rodrigo", "Huaiquio", "Cheuque", "1998-01-19", 974853214, "Maule", "Talca", "Manzanillos #780");
        Person riesgo1 = new Person("14.130.489-5", "128.747.467", "Andrea", "Alejandra", "Del castillo", "De caso", "1980-08-24", 975426458, "Maule", "Talca", "Cantera #410");
        Person finanza1 = new Person("18.179.081-4", "147.258.364", "Alberto", "Patricio", "Salinas", "Salinas", "1999-09-14", 934575648, "Maule", "Talca", "Costabrava #980");
        Person cobranza1 = new Person("16.240.120-3", "578.678.147", "Josselin", "Maryory", "Jostar", "Irribarra", "2000-05-17", 944684523, "Maule", "Talca", "Bespucio #210");
        Person informatica1 = new Person("17.506.786-8", "784.946.548", "Carol", "Denisse", "Orellana", "Caamaño", "1995-02-01", 947852134, "Maule", "Talca", "Oñederra #190");

        if (personRepository.findAll().isEmpty()) {
            personRepository.save(cliente1);
            personRepository.save(cliente2);
            personRepository.save(cliente3);
            personRepository.save(vendedor1);
            personRepository.save(evaluador1);
            personRepository.save(riesgo1);
            personRepository.save(finanza1);
            personRepository.save(cobranza1);
            personRepository.save(informatica1);
        }

        if (userRepository.findAll().isEmpty()) {
            userRepository.save(new User("20349272", passwordEncoder.encode("2103"), "matias.salas@alu.ucm.com", cliente, cliente1));
            userRepository.save(new User("17787884", passwordEncoder.encode("2103"), "elpromaspro@gmail.com", cliente, cliente2));
            userRepository.save(new User("17869108", passwordEncoder.encode("2103"), "henancitopro@gmail.com", cliente, cliente3));
            userRepository.save(new User("vendedor", passwordEncoder.encode("2103"), "fperez@banco.com", vendedor, vendedor1));
            userRepository.save(new User("evaluador", passwordEncoder.encode("2103"), "ahuaiquio@banco.com", evaluador, evaluador1));
            userRepository.save(new User("riesgo", passwordEncoder.encode("2103"), "adelcastillo@banco.com", riesgo, riesgo1));
            userRepository.save(new User("finanza", passwordEncoder.encode("2103"), "asalinas@banco.com", finanza, finanza1));
            userRepository.save(new User("cobranza", passwordEncoder.encode("2103"), "jjostar@banco.com", cobranza, cobranza1));
            userRepository.save(new User("informatica", passwordEncoder.encode("2103"), "corellana@banco.com", informatica, informatica1));
        }
    }

}
