export class NewUser {
    userData: string
    run: string;
    document: string;
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    paternalLastName: string;
    maternalLastName: string;
    dateOfBirth: string;
    phone: string;
    region: string;
    city: string;
    address: string;
    //authorities: string[];
    
    constructor(
        run: string,
        document: string,
        email: string,
        password: string,
        firstName: string,
        middleName: string,
        paternalLastName: string,
        maternalLastName: string,
        dateOfBirth: string,
        phone: string,
        region: string,
        city: string,
        address: string
    ) {
        this.run = run
        this.document = document
        this.email = email
        this.password = password
        this.firstName = firstName
        this.middleName = middleName
        this.paternalLastName = paternalLastName
        this.maternalLastName = maternalLastName
        this.dateOfBirth = dateOfBirth
        this.phone = phone
        this.region = region
        this.city = city
        this.address = address
    }
}
