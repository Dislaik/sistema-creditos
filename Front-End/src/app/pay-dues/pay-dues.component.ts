import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Person } from '../entity/person';
import { CreditService } from '../service/credit.service';
import { Credit } from '../entity/credit';

@Component({
  selector: 'app-pay-dues',
  templateUrl: './pay-dues.component.html',
  styleUrls: ['./pay-dues.component.css']
})
export class PayDuesComponent implements OnInit {

  private readonly notifier: NotifierService;
  tableCredits = [];
  person: Person;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private userService: UserService,
    private creditService: CreditService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.userService.findByUsername(this.tokenService.getUsername()).subscribe(
        data => {

          this.person = data.person;

          this.getAllCredits(this.person);
        },
        err => {
  
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  getAllCredits(arg: any) {
    this.creditService.findAll().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].idPerson.id == arg.id) {
            this.tableCredits.push(data[i])
          }
        }
      },
      err => {

      }
    );
  }

  payCredit(arg: any) {
    const credit: Credit = arg;

    this.creditService.delete(credit.id).subscribe(
      data => {
        this.notifier.notify('success', "Cuota pagada con exito!");
        for (let i = 0; i < this.tableCredits.length; i++) {
          if (this.tableCredits[i].id == data.id) {
            this.tableCredits.splice(i, 1);
          }
        }
      },
      err => {

      }
    );
  }

}
