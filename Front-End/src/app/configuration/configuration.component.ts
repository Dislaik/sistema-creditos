import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../service/user.service';
import { Person } from '../entity/person';
import { User } from '../entity/user';
import { Role } from '../entity/role';
import { ConfigUser } from '../entity/config-user';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  private readonly notifier: NotifierService;
  user: User;
  role: string;
  configUser: ConfigUser;
  configFields: any = {};
  run: string;
  email: string;
  password: string;
  username: string;
  id_person: Person;
  id_role: Role;
  fullName: string;
  dateOfBirth: string;
  address: string;
  phone: number;
  

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private userService: UserService,
    private configService: ConfigService,
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
        this.run = data.person.run;
        this.fullName = data.person.firstName + " " + data.person.middleName + " " + data.person.paternalLastName + " " + data.person.maternalLastName
        this.dateOfBirth =  data.person.dateOfBirth;

        this.configFields.address = data.person.address;
        this.configFields.password = data.password;
        console.log(this.configFields.password)
        this.configFields.email = data.email;
        this.configFields.phone = data.person.phone;

        this.username = data.username;
        this.id_person = data.person;
        this.id_role = data.role;
        this.role = data.role.role
        console.log(this.id_role.role)

        if (this.role != "cliente") {
          this.email = data.email;
        }
      },
      err => {

      }
    );
  }

  saveChanges(): void {
    if (this.address) {  //&& !this.address.startsWith(" ")
      this.configFields.address = this.address;
    }

    if (this.password) {
      this.configFields.password = this.password;
    }

    if (this.email && this.role == "cliente") {
      this.configFields.email = this.email;
    }

    if (this.phone) {
      this.configFields.phone = this.phone;
    }

    
    this.configUser = new ConfigUser(this.configFields.address, this.configFields.password, this.configFields.email, this.configFields.phone)
    this.configService.updateByUsername(this.tokenService.getUsername(), this.configUser).subscribe(
      data => {
        this.notifier.notify('success', data.message);
        this.router.navigate(['/']);
      },
      err => {
        this.notifier.notify('error', err.error.message);
      }
    );
  }
}
