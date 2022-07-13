package com.system.credits.entity;

import javax.persistence.*;
import javax.validation.Constraint;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @Column(unique = true)
    private String username;
    @NotNull
    private String password;
    @NotNull
    @Column(unique = true)
    private String email;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_role", referencedColumnName = "id") /// Constraint Foreign Key(role) references role(id)
    private Role role; /// references [role]

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_person", referencedColumnName = "id")
    private Person person;

    public User() {
    }

    public User(String username, String password, String email, Role role, Person person) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.person = person;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
