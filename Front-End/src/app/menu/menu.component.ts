import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import JwtDecode from 'jwt-decode';
import { Role } from '../entity/role';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private readonly notifier: NotifierService;
  isLogged = false;
  role: string;
  tokenDecode: {}

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

    this.tokenDecode = JwtDecode(this.tokenService.getToken());
    this.role = this.tokenDecode["role"][0].authority;
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    /*this.userService.findByUsername(this.tokenService.getUsername()).subscribe(
      data => {
        this.role = data.role.role;
        console.log(this.role);
      },
      err => {

      }
    );*/

  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
