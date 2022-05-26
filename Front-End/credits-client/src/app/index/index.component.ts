import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      
    } else {
      this.router.navigate(['/login']);
    }
  }

}
