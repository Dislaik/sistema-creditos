export class ConfigUser {
    address: string;
    password: string;
    email: string;
    phone: number;

    constructor(address: string, password: string, email: string, phone: number) {
        this.address = address;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
}
