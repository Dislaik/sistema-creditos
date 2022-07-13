import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NewUser } from '../entity/new-user';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/register']);
    }
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
      
    this.authService.register(this.newUser).subscribe(
      data => {
        this.notifier.notify('success', 'Usuario creado con exito!');
        this.router.navigate(['/login']);

      },
      err => {


        console.log(err.error);
        
      }
    );
  }

}
