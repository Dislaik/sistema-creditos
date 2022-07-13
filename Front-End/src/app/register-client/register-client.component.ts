import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NewUser } from '../entity/new-user';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  private readonly notifier: NotifierService;
  newUser: NewUser;
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
  fieldsIsNull: boolean;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    
  }


  onRegister(): void {
    this.newUser = new NewUser(
    this.run,
    this.document,
    this.email,
    this.password,
    this.firstName,
    this.middleName,
    this.paternalLastName,
    this.maternalLastName,
    this.dateOfBirth,
    this.phone,
    this.region,
    this.city,
    this.address
    );

    this.fieldsIsNull = true;
    for (const key in this.newUser) {
      if (!this.newUser[key]) {
        this.fieldsIsNull = false;
      }
    }

    if (this.fieldsIsNull) {
      console.log("no hay campos vacios, proceder")
      this.authService.register(this.newUser).subscribe(
        data => {
          this.notifier.notify('success', 'Usuario creado con exito!');
          this.run = null;
          this.document = null;
          this.email = null;
          this.password = null;
          this.firstName = null;
          this.middleName = null;
          this.paternalLastName = null;
          this.maternalLastName = null;
          this.dateOfBirth = null;
          this.phone = null;
          this.region = null;
          this.city = null;
          this.address = null;
  
        },
        err => {
          this.notifier.notify('error', err.error.message);
  
          
        }
      );
    } else {
      console.log("HAY CAMPOS VACIOS, REVISAR!")
    }
  }
}
