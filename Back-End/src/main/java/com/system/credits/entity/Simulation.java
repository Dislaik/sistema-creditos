package com.system.credits.entity;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "simulations")
public class Simulation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_person", referencedColumnName = "id")
    private Person idPerson;

    @NotNull
    private String status;

    @NotNull
    private String civilStatus;

    @NotNull
    private String job;

    @NotNull
    private String jobContract;

    @NotNull
    private String afp;

    @NotNull
    private Integer salary;

    @NotNull
    private Integer honorarium;

    @NotNull
    private Integer requestedAmount;

    @NotNull
    private Integer feesAmount;

    @NotNull
    @Column(columnDefinition = "TINYINT(1)")
    private Boolean lienInsurance;

    @NotNull
    @Column(columnDefinition = "TINYINT(1)")
    private Boolean unemploymentInsurance;

    @NotNull
    private String paymentType;

    @NotNull
    private String createdDate;

    @NotNull
    private String dniFile;

    @NotNull
    private String liquidationFile;

    @NotNull
    private String jobContractFile;

    @NotNull
    private String afpFile;

    @NotNull
    private String sbifFile;

    @NotNull
    private String electricityWaterTicketFile;

    @Column(columnDefinition = "TINYINT(1)")
    private Boolean debtPercentageEvaluador;

    private String observationsEvaluador;

    @Column(columnDefinition = "TINYINT(1)")
    private Boolean debtPercentageRiesgo;

    private String observationsRiesgo;

    private String creditBehaviorRiesgo;

    private String bankingHistoryRiesgo;

    public Simulation() {
    }

    public Simulation(Person idPerson, String status, String civilStatus, String job, String jobContract, String afp, Integer salary, Integer honorarium, Integer requestedAmount, Integer feesAmount, Boolean lienInsurance, Boolean unemploymentInsurance, String paymentType, String createdDate, String dniFile, String liquidationFile, String jobContractFile, String afpFile, String sbifFile, String electricityWaterTicketFile, Boolean debtPercentageEvaluador, String observationsEvaluador, Boolean debtPercentageRiesgo, String observationsRiesgo, String creditBehaviorRiesgo, String bankingHistoryRiesgo) {
        this.idPerson = idPerson;
        this.status = status;
        this.civilStatus = civilStatus;
        this.job = job;
        this.jobContract = jobContract;
        this.afp = afp;
        this.salary = salary;
        this.honorarium = honorarium;
        this.requestedAmount = requestedAmount;
        this.feesAmount = feesAmount;
        this.lienInsurance = lienInsurance;
        this.unemploymentInsurance = unemploymentInsurance;
        this.paymentType = paymentType;
        this.createdDate = createdDate;
        this.dniFile = dniFile;
        this.liquidationFile = liquidationFile;
        this.jobContractFile = jobContractFile;
        this.afpFile = afpFile;
        this.sbifFile = sbifFile;
        this.electricityWaterTicketFile = electricityWaterTicketFile;
        this.debtPercentageEvaluador = debtPercentageEvaluador;
        this.observationsEvaluador = observationsEvaluador;
        this.debtPercentageRiesgo = debtPercentageRiesgo;
        this.observationsRiesgo = observationsRiesgo;
        this.creditBehaviorRiesgo = creditBehaviorRiesgo;
        this.bankingHistoryRiesgo = bankingHistoryRiesgo;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCivilStatus() {
        return civilStatus;
    }

    public void setCivilStatus(String civilStatus) {
        this.civilStatus = civilStatus;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getJobContract() {
        return jobContract;
    }

    public void setJobContract(String jobContract) {
        this.jobContract = jobContract;
    }

    public String getAfp() {
        return afp;
    }

    public void setAfp(String afp) {
        this.afp = afp;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Integer getHonorarium() {
        return honorarium;
    }

    public void setHonorarium(Integer honorarium) {
        this.honorarium = honorarium;
    }

    public Integer getRequestedAmount() {
        return requestedAmount;
    }

    public void setRequestedAmount(Integer requestedAmount) {
        this.requestedAmount = requestedAmount;
    }

    public Integer getFeesAmount() {
        return feesAmount;
    }

    public void setFeesAmount(Integer feesAmount) {
        this.feesAmount = feesAmount;
    }

    public Boolean getLienInsurance() {
        return lienInsurance;
    }

    public void setLienInsurance(Boolean lienInsurance) {
        this.lienInsurance = lienInsurance;
    }

    public Boolean getUnemploymentInsurance() {
        return unemploymentInsurance;
    }

    public void setUnemploymentInsurance(Boolean unemploymentInsurance) {
        this.unemploymentInsurance = unemploymentInsurance;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getDniFile() {
        return dniFile;
    }

    public void setDniFile(String dniFile) {
        this.dniFile = dniFile;
    }

    public String getLiquidationFile() {
        return liquidationFile;
    }

    public void setLiquidationFile(String liquidationFile) {
        this.liquidationFile = liquidationFile;
    }

    public String getJobContractFile() {
        return jobContractFile;
    }

    public void setJobContractFile(String jobContractFile) {
        this.jobContractFile = jobContractFile;
    }

    public String getAfpFile() {
        return afpFile;
    }

    public void setAfpFile(String afpFile) {
        this.afpFile = afpFile;
    }

    public String getSbifFile() {
        return sbifFile;
    }

    public void setSbifFile(String sbifFile) {
        this.sbifFile = sbifFile;
    }

    public String getElectricityWaterTicketFile() {
        return electricityWaterTicketFile;
    }

    public void setElectricityWaterTicketFile(String electricityWaterTicketFile) {
        this.electricityWaterTicketFile = electricityWaterTicketFile;
    }

    public Boolean getDebtPercentageEvaluador() {
        return debtPercentageEvaluador;
    }

    public void setDebtPercentageEvaluador(Boolean debtPercentageEvaluador) {
        this.debtPercentageEvaluador = debtPercentageEvaluador;
    }

    public String getObservationsEvaluador() {
        return observationsEvaluador;
    }

    public void setObservationsEvaluador(String observationsEvaluador) {
        this.observationsEvaluador = observationsEvaluador;
    }

    public Boolean getDebtPercentageRiesgo() {
        return debtPercentageRiesgo;
    }

    public void setDebtPercentageRiesgo(Boolean debtPercentageRiesgo) {
        this.debtPercentageRiesgo = debtPercentageRiesgo;
    }

    public String getObservationsRiesgo() {
        return observationsRiesgo;
    }

    public void setObservationsRiesgo(String observationsRiesgo) {
        this.observationsRiesgo = observationsRiesgo;
    }

    public String getCreditBehaviorRiesgo() {
        return creditBehaviorRiesgo;
    }

    public void setCreditBehaviorRiesgo(String creditBehaviorRiesgo) {
        this.creditBehaviorRiesgo = creditBehaviorRiesgo;
    }

    public String getBankingHistoryRiesgo() {
        return bankingHistoryRiesgo;
    }

    public void setBankingHistoryRiesgo(String bankingHistoryRiesgo) {
        this.bankingHistoryRiesgo = bankingHistoryRiesgo;
    }
}
