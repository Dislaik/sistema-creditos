import { Person } from './person';

export class Simulation {
    id: number;
    idPerson: Person;
    status: string;
    civilStatus: string;
    job: string;
    jobContract: string;
    afp: string;
    salary: number;
    honorarium: number;
    requestedAmount: number;
    feesAmount: number;
    lienInsurance: boolean;
    unemploymentInsurance: boolean;
    paymentType: string;
    createdDate: string;
    dniFile: string;
    liquidationFile: string;
    jobContractFile: string;
    afpFile: string;
    sbifFile: string;
    electricityWaterTicketFile: string;
    debtPercentageEvaluador: boolean;
    observationsEvaluador: string;
    debtPercentageRiesgo: boolean;
    observationsRiesgo: string;
    creditBehaviorRiesgo: string;
    bankingHistoryRiesgo: string;



    constructor(idPerson: Person, status: string, civilStatus: string, job: string, jobContract: string, afp: string, salary: number, honorarium: number, requestedAmount: number, feesAmount: number, lienInsurance: boolean, unemploymentInsurance: boolean, paymentType: string, createdDate: string, dniFile: string, liquidationFile: string, jobContractFile: string, afpFile: string, sbifFile: string, electricityWaterTicketFile: string, debtPercentageEvaluador: boolean, observationsEvaluador: string, debtPercentageRiesgo: boolean, observationsRiesgo: string, creditBehaviorRiesgo: string, bankingHistoryRiesgo: string) {
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
}
