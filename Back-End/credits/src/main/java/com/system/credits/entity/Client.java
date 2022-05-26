package com.system.credits.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
/// @Table(name = "clientes")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    @Column(unique = true)
    private String run;
    @NotNull
    @Column(unique = true)
    private String document;
    @NotNull
    private String firstName;
    @NotNull
    private String secondName;
    @NotNull
    private String paternalLastName;
    @NotNull
    private String maternalLastName;
    @NotNull
    private String dateOfBirth;
    @NotNull
    @Column(unique = true)
    private Integer phone;
    @NotNull
    private String region;
    @NotNull
    private String city;
    @NotNull
    private String address;

    @NotNull
    @OneToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id") /// Constraint Foreign Key(user) references user(id)
    private User user; /// references [User]

    public Client() {
    }

    public Client(String run, String document, String firstName, String secondName, String paternalLastName, String maternalLastName, String dateOfBirth, Integer phone, String region, String city, String address) {
        this.run = run;
        this.document = document;
        this.firstName = firstName;
        this.secondName = secondName;
        this.paternalLastName = paternalLastName;
        this.maternalLastName = maternalLastName;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.region = region;
        this.city = city;
        this.address = address;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRun() {
        return run;
    }

    public void setRun(String run) {
        this.run = run;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getPaternalLastName() {
        return paternalLastName;
    }

    public void setPaternalLastName(String paternalLastName) {
        this.paternalLastName = paternalLastName;
    }

    public String getMaternalLastName() {
        return maternalLastName;
    }

    public void setMaternalLastName(String maternalLastName) {
        this.maternalLastName = maternalLastName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
