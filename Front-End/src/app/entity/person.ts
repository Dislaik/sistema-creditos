export class Person {
    id: number;
    run: string;
    document: string;
    firstName: string;
    middleName: string;
    paternalLastName: string;
    maternalLastName: string;
    dateOfBirth: string;
    phone: number;
    region: string;
    city: string;
    address: string;

    constructor(run: string, document: string, firstName: string, middleName: string, paternalLastName: string, maternalLastName: string, dateOfBirth: string, phone: number, region: string, city: string, address: string) {
        this.run = run;
        this.document = document;
        this.firstName = firstName;
        this.middleName = middleName;
        this.paternalLastName = paternalLastName;
        this.maternalLastName = maternalLastName;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.region = region;
        this.city = city;
        this.address = address;
    }
}
