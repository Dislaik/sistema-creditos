package com.system.credits.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "credits")
public class Credit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_person", referencedColumnName = "id")
    private Person idPerson;

    @NotNull
    @OneToOne
    @JoinColumn(name = "id_simulation", referencedColumnName = "id")
    private Simulation idSimulation;

    @NotNull
    private Integer payment;

    @NotNull
    private String paymentType;

    @NotNull
    private Integer mora;

    @NotNull
    private String operationDate;

    @NotNull
    private String expirationDate;

    public Credit() {
    }

    public Credit(Person idPerson, Simulation idSimulation, Integer payment, String paymentType, Integer mora, String operationDate, String expirationDate) {
        this.idPerson = idPerson;
        this.idSimulation = idSimulation;
        this.payment = payment;
        this.paymentType = paymentType;
        this.mora = mora;
        this.operationDate = operationDate;
        this.expirationDate = expirationDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Person getIdPerson() {
        return idPerson;
    }

    public void setIdPerson(Person idPerson) {
        this.idPerson = idPerson;
    }

    public Simulation getIdSimulation() {
        return idSimulation;
    }

    public void setIdSimulation(Simulation idSimulation) {
        this.idSimulation = idSimulation;
    }

    public Integer getPayment() {
        return payment;
    }

    public void setPayment(Integer payment) {
        this.payment = payment;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public Integer getMora() {
        return mora;
    }

    public void setMora(Integer mora) {
        this.mora = mora;
    }

    public String getOperationDate() {
        return operationDate;
    }

    public void setOperationDate(String operationDate) {
        this.operationDate = operationDate;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
    }
}
