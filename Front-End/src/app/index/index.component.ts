import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Person } from '../entity/person';
import { SimulationService } from '../service/simulation.service';
import { Simulation } from '../entity/simulation';
import { NotifierService } from 'angular-notifier';
import { CreditService } from '../service/credit.service';
import { Credit } from '../entity/credit';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private userService: UserService,
    private simulationService: SimulationService,
    private creditService: CreditService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  name: string;
  run: string;
  role: string;
  fullNames: string;
  fullLastName: string;
  person: Person;
  tableSimulations = [];
  modalSimulationDetails = <any>{};
  optionsGoodRegularBad = [
    {id: 1, name: "Malo"},
    {id: 2, name: "Regular"}, 
    {id: 3, name: "Bueno"}
  ];
  interestRate: number = 5;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.userService.findByUsername(this.tokenService.getUsername()).subscribe(
        data => {
          this.role = data.role.role;

          
          this.name = data.person.firstName + " " + data.person.paternalLastName
          this.run = data.person.run;
          this.fullNames = data.person.firstName + " " + data.person.middleName;
          this.fullLastName = data.person.paternalLastName + " " + data.person.maternalLastName;
          this.person = data.person;

          const person: Person = this.person;
          if (this.role == "evaluador" || this.role == "riesgo" || this.role == "finanza") {
            this.getAllSimulations();
          } else {
            this.getSelfSimulations(person.id);
          }
        },
        err => {
  
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
    
  }

  getSelfSimulations(arg: any) {
    this.simulationService.findAll().subscribe(
      data => {
        console.log(data.length)
        for (let i = 0; i < data.length; i++) {
          if (data[i].idPerson.id == arg) {
            this.tableSimulations.push(data[i])
          }
          
        }
      },
      err => {

      }
    );
  };

  getAllSimulations() {
    this.simulationService.findAll().subscribe(
      data => {
        console.log(data.length)
        for (let i = 0; i < data.length; i++) {
          if (data[i].status == "En Evaluación" && this.role == "evaluador") {
            this.tableSimulations.push(data[i])
          }

          if (data[i].status == "Rechazada evaluación" && this.role == "riesgo") {
            this.tableSimulations.push(data[i])
          }

          if ((data[i].status == "Aprobado" || data[i].status == "Aprobado riesgo") && this.role == "finanza") {
            this.tableSimulations.push(data[i])
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
    if (this.role == "riesgo") {
      if (arg.debtPercentageEvaluador) {this.modalSimulationDetails.debtPercentageEvaluador = "Sí"} else {this.modalSimulationDetails.debtPercentageEvaluador = "No"}
      this.modalSimulationDetails.observationsEvaluador = arg.observationsEvaluador;
    } else {
      this.modalSimulationDetails.debtPercentageEvaluador = false;
      this.modalSimulationDetails.observationsEvaluador = "";
    }
    this.modalSimulationDetails.debtPercentageRiesgo = false;
    this.modalSimulationDetails.observationsRiesgo = "";
    this.modalSimulationDetails.creditBehaviorRiesgo = this.optionsGoodRegularBad[0];
    this.modalSimulationDetails.bankingHistoryRiesgo = this.optionsGoodRegularBad[0];
  }


  approvedSimulation(): void {
    const simulation: Simulation = this.modalSimulationDetails.object;
    if (this.role == "evaluador") {
      simulation.status = "Aprobado"
      simulation.debtPercentageEvaluador = this.modalSimulationDetails.debtPercentageEvaluador;
      simulation.observationsEvaluador = this.modalSimulationDetails.observationsEvaluador;
    }

    if (this.role == "riesgo") {
      simulation.status = "Aprobado riesgo"
      simulation.debtPercentageRiesgo = this.modalSimulationDetails.debtPercentageRiesgo;
      simulation.observationsRiesgo = this.modalSimulationDetails.observationsRiesgo;
      simulation.creditBehaviorRiesgo = this.modalSimulationDetails.creditBehaviorRiesgo.name;
      simulation.bankingHistoryRiesgo = this.modalSimulationDetails.bankingHistoryRiesgo.name;
    }
    this.simulationService.updateById(this.modalSimulationDetails.id, simulation).subscribe(
      data => {
        this.notifier.notify('success', 'Se a evaluado con exito la simulación');

        console.log(data.id)
        for (let i = 0; i < this.tableSimulations.length; i++) {
          if (this.tableSimulations[i].id == data.id) {
            this.tableSimulations.splice(i, 1);
          }
        }
      },
      err => {

      }
    );

  }
  
  rejectedSimulation(): void {
    const simulation: Simulation = this.modalSimulationDetails.object;
    if (this.role == "evaluador") {
      simulation.status = "Rechazada evaluación"
      simulation.debtPercentageEvaluador = this.modalSimulationDetails.debtPercentageEvaluador;
      simulation.observationsEvaluador = this.modalSimulationDetails.observationsEvaluador;
    }
    if (this.role == "riesgo") {
      simulation.status = "Rechazado riesgo"
      simulation.debtPercentageRiesgo = this.modalSimulationDetails.debtPercentageRiesgo;
      simulation.observationsRiesgo = this.modalSimulationDetails.observationsRiesgo;
      simulation.creditBehaviorRiesgo = this.modalSimulationDetails.creditBehaviorRiesgo.name;
      simulation.bankingHistoryRiesgo = this.modalSimulationDetails.bankingHistoryRiesgo.name;
    }

    this.simulationService.updateById(this.modalSimulationDetails.id, simulation).subscribe(
      data => {
        this.notifier.notify('success', 'Se a evaluado con exito la simulación');

        console.log(data.id)
        for (let i = 0; i < this.tableSimulations.length; i++) {
          if (this.tableSimulations[i].id == data.id) {
            this.tableSimulations.splice(i, 1);
          }
        }
      },
      err => {

      }
    );
  }


  generatePayment(arg: any) {
    const simulation: Simulation = arg;
    simulation.status = "Obsoleto";
    this.simulationService.updateById(arg.id, simulation).subscribe(
      data => {
        this.notifier.notify('success', 'Se realizo el pago con exito!');

        for (let i = 0; i < this.tableSimulations.length; i++) {
          if (this.tableSimulations[i].id == data.id) {
            this.tableSimulations.splice(i, 1);
            this.createCredit(simulation);
          }
        }
      },
      err => {

      }
    );
  }

  createCredit(arg: any) {
    const simulation: Simulation = arg;
    const person: Person = simulation.idPerson
    console.log(person);

    var interest = (simulation.requestedAmount * (this.interestRate/100))
    var totalAmountCredit = Number(simulation.requestedAmount) + Number(interest) /// falta añadir seguros
    var eachAmountFee = Number(totalAmountCredit) / Number(simulation.feesAmount)
    
    for (let index = 1; index <= simulation.feesAmount; index++) {
      console.log(eachAmountFee);
      var oneMonthAfter = new Date(new Date().setMonth(new Date().getMonth()+index)).toISOString().slice(0, 10);
      console.log(oneMonthAfter);
      const credit = new Credit(person, simulation, eachAmountFee, simulation.paymentType, 0, new Date().toISOString().slice(0, 10), oneMonthAfter)

      this.creditService.create(credit).subscribe(
        data => {
          
        },
        err => {
  
        }
      );
    }

    

  }


}
