import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../entity/login-user';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import JwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly notifier: NotifierService;
  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser;
  username: string;
  password: string;
  roles: string[] = [];

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    /*if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }*/
    if (this.tokenService.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.username, this.password)
    this.authService.login(this.loginUser).subscribe(
      data => {
        //this.isLogged = true;//
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        //console.log(JwtDecode(data.token))
        this.notifier.notify('success', 'Has ingresado exitosamente!');
        this.router.navigate(['/']);
      },
      err => {
        //this.isLogged = false;
        this.isLoginFail = true;

        console.log(err.error);
        
      }
    )
  }

}
