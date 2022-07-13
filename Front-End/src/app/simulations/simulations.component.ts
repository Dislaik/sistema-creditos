import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { SimulationService } from '../service/simulation.service';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.css']
})
export class SimulationsComponent implements OnInit {

  private readonly notifier: NotifierService;
  role: string;
  tableSimulationsAprobado = [];
  tableSimulationsRechazado = [];
  modalSimulationDetails = <any>{};

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private userService: UserService,
    private simulationService: SimulationService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.userService.findByUsername(this.tokenService.getUsername()).subscribe(
        data => {
          this.role = data.role.role;

          
          this.getAllSimulations();
        },
        err => {
  
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
    
  }

  getAllSimulations() {
    this.simulationService.findAll().subscribe(
      data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          if (data[i].status == "Aprobado" && this.role == "evaluador") {
            this.tableSimulationsAprobado.push(data[i])
            console.log(this.tableSimulationsAprobado)
          }

          if (data[i].status == "Rechazada evaluación" && this.role == "evaluador") {
            this.tableSimulationsRechazado.push(data[i])
            console.log(this.tableSimulationsRechazado)
          }

          if (data[i].status == "Aprobado riesgo" && this.role == "riesgo") {
            this.tableSimulationsAprobado.push(data[i])
            console.log(this.tableSimulationsAprobado)
          }

          if (data[i].status == "Rechazado riesgo" && this.role == "riesgo") {
            this.tableSimulationsRechazado.push(data[i])
            console.log(this.tableSimulationsRechazado)
          }
          
        }
      },
      err => {

      }
    );
  };

  simulationDetails(arg: any) {
    this.modalSimulationDetails.object = arg;
    this.modalSimulationDetails.id = arg.id;
    this.modalSimulationDetails.run = arg.idPerson.run;
    this.modalSimulationDetails.fullName = arg.idPerson.firstName + " " + arg.idPerson.middleName + " " + arg.idPerson.paternalLastName + " " + arg.idPerson.maternalLastName;
    this.modalSimulationDetails.status = arg.status;
    this.modalSimulationDetails.civilStatus = arg.civilStatus;
    this.modalSimulationDetails.job = arg.job
    this.modalSimulationDetails.jobContract = arg.jobContract
    this.modalSimulationDetails.afp = arg.afp
    this.modalSimulationDetails.salary = arg.salary
    this.modalSimulationDetails.honorarium = arg.honorarium
    this.modalSimulationDetails.requestedAmount = arg.requestedAmount
    this.modalSimulationDetails.feesAmount = arg.feesAmount
    if (arg.lienInsurance) {this.modalSimulationDetails.lienInsurance = "Sí"} else {this.modalSimulationDetails.lienInsurance = "No"}
    if (arg.unemploymentInsurance) {this.modalSimulationDetails.unemploymentInsurance = "Sí"} else {this.modalSimulationDetails.unemploymentInsurance = "No"}
    this.modalSimulationDetails.paymentType = arg.paymentType
    this.modalSimulationDetails.createdDate = arg.createdDate
    this.modalSimulationDetails.dniFile = arg.dniFile;
    this.modalSimulationDetails.liquidationFile = arg.liquidationFile;
    this.modalSimulationDetails.jobContractFile = arg.jobContractFile;
    this.modalSimulationDetails.afpFile = arg.afpFile;
    this.modalSimulationDetails.sbifFile = arg.sbifFile;
    this.modalSimulationDetails.electricityWaterTicketFile = arg.electricityWaterTicketFile;
    if (arg.debtPercentageEvaluador) {this.modalSimulationDetails.debtPercentageEvaluador = "Sí"} else {this.modalSimulationDetails.debtPercentageEvaluador = "No"}
    this.modalSimulationDetails.observationsEvaluador = arg.observationsEvaluador;
    if (arg.debtPercentageRiesgo) {this.modalSimulationDetails.debtPercentageRiesgo = "Sí"} else {this.modalSimulationDetails.debtPercentageRiesgo = "No"}
    this.modalSimulationDetails.observationsRiesgo = arg.observationsRiesgo;
    this.modalSimulationDetails.creditBehaviorRiesgo = arg.creditBehaviorRiesgo;
    this.modalSimulationDetails.bankingHistoryRiesgo = arg.bankingHistoryRiesgo;

  }

}
