export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    id_person: any;
    id_role: any;

    constructor(username: string, password: string, email: string, id_person: any, id_role: any) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.id_person = id_person;
        this.id_role = id_role;
    }
}