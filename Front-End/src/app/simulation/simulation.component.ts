import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { SimulationService } from '../service/simulation.service';
import { Simulation } from '../entity/simulation';
import { Person } from '../entity/person';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  private readonly notifier: NotifierService;
  username: string;
  role: string;
  searchCliente: string;
  person: Person;
  fullName: string;
  dateOfBirth: string;
  address: string;
  optionsCivilStatus = [
    {id: 1, name: "Soltero(a)"},
    {id: 2, name: "Casado(a)"}, 
    {id: 3, name: "Separado(a)"}, 
    {id: 4, name: "Viudo(a)"},
    {id: 4, name: "Divorciado(a)"}
  ];
  selectedCivilStatus = this.optionsCivilStatus[0];
  job: string;
  optionsJobContract = [
    {id: 1, name: "Contrato por obra o faena"},
    {id: 2, name: "Contrato a plazo fijo"}, 
    {id: 3, name: "Contrato part-time"}, 
    {id: 4, name: "Contrato indenifido"},
    {id: 5, name: "Contrato para practicante"},
    {id: 6, name: "Contrato para extranjeros"},
    {id: 7, name: "Contrato para arte y espectáculo"},
    {id: 8, name: "Contrato por honorarios"}
  ];
  selectedJobContract = this.optionsJobContract[0];
  optionsAFP = [
    {id: 1, name: "AFP Capital"},
    {id: 2, name: "AFP Habitat"}, 
    {id: 3, name: "AFP Cuprum"}, 
    {id: 4, name: "AFP Modelo"},
    {id: 5, name: "AFP PlanVital"},
    {id: 6, name: "AFP Provida"}
  ];
  selectedAFP = this.optionsAFP[0];
  salary: number;
  honorarium: number;
  requestedAmount: number;
  feesAmount: number;
  lienInsurance: boolean = false;
  unemploymentInsurance: boolean = false;
  optionsPaymentType = [
    {id: 1, name: "Cheque"},
    {id: 2, name: "Transferencia"}
  ];
  selectedPaymentType = this.optionsPaymentType[0];
  totalAmountCredit: number = 0;
  interestRate: number = 5;
  eachAmountFee: number = 0;
  dniFile: string;
  liquidationFile: string;
  jobContractFile: string;
  afpFile: string;
  sbifFile: string;
  electricityWaterTicketFile: string;

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

    if (this.tokenService.isTokenExpired(this.tokenService.getToken())) {
      this.tokenService.logOut();
      this.router.navigate(['/login']);
      this.notifier.notify('error', 'Tu sesión ha expirado.');
    }

    this.userService.findByUsername(this.tokenService.getUsername()).subscribe(
      data => {
        this.role = data.role.role;

        if (this.role == "cliente") {
          this.fullName = data.person.firstName + " " + data.person.middleName + " " + data.person.paternalLastName + " " + data.person.maternalLastName
          this.dateOfBirth =  data.person.dateOfBirth;
          this.address = data.person.address;

          this.username = data.username;
          this.person = data.person;
        }
      },
      err => {

      }
    );
  }


  simulate(): void {
    var interest = (this.requestedAmount * (this.interestRate/100))
    this.totalAmountCredit = Number(this.requestedAmount) + Number(interest) /// falta añadir seguros
    this.eachAmountFee = Math.round(Number(this.totalAmountCredit) / Number(this.feesAmount))
    
    
  }


  send(): void {
    const person: Person = this.person; // convierte el {object} en una clase
    const simulation = new Simulation(person, "En Evaluación", this.selectedCivilStatus.name, this.job, this.selectedJobContract.name, this.selectedAFP.name, this.salary, this.honorarium, this.requestedAmount, this.feesAmount, this.lienInsurance, this.unemploymentInsurance, this.selectedPaymentType.name, new Date().toISOString().slice(0, 10).replace('T', ' '), this.dniFile, this.liquidationFile, this.jobContractFile, this.afpFile, this.sbifFile, this.electricityWaterTicketFile, null, null, null, null ,null, null);
    console.log(this.lienInsurance);
    console.log(this.unemploymentInsurance);
    this.simulationService.create(simulation).subscribe(
      data => {
        this.notifier.notify('success', "La simulación se ha enviado para ser evaluada.");
        this.router.navigate(['/']);
      },
      err => {

      }
    );
  }

  search():void {
    this.userService.findByUsername(this.searchCliente).subscribe(
      data => {
        this.fullName = data.person.firstName + " " + data.person.middleName + " " + data.person.paternalLastName + " " + data.person.maternalLastName
        this.dateOfBirth =  data.person.dateOfBirth;
        this.address = data.person.address;

        this.username = data.username;
        this.person = data.person;
      },
      err => {

      }
    );
  }


}

function numberWithDots(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}