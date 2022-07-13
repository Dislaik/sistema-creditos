import { Person } from './person';
import { Simulation } from './simulation';

export class Credit {
    id: number;
    idPerson: Person;
    idSimulation: Simulation;
    payment: number;
    paymentType: string;
    mora: number;
    operationDate: string;
    expirationDate: string;

    constructor(idPerson: Person, idSimulation: Simulation, payment: number, paymentType: string, mora: number, operationDate: string, expirationDate: string) {
        this.idPerson = idPerson;
        this.idSimulation = idSimulation;
        this.payment = payment;
        this.paymentType = paymentType;
        this.mora = mora;
        this.operationDate = operationDate;
        this.expirationDate = expirationDate;
    }
}
