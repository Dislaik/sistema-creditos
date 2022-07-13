import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { PersonService } from '../service/person.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Person } from '../entity/person';
import { User } from '../entity/user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  private readonly notifier: NotifierService;
  searchInput: string;
  tableManageUsers = [];
  tableManageUsersSearch = [];
  modalManageUsersEdit = <any>{};
  username: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private userService: UserService,
    private personService: PersonService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          this.tableManageUsers.push(data[i])
          

          
        }

        this.tableManageUsersSearch = this.tableManageUsers;
      },
      err => {

      }
    );
    
  }

  search():void {
    this.tableManageUsersSearch = [];
    for (let i = 0; i < this.tableManageUsers.length; i++) {
      if (this.tableManageUsers[i].username.includes(this.searchInput)) {
        this.tableManageUsersSearch.push(this.tableManageUsers[i])

      }

    }
  }

  remove(arg: any):void {
    this.userService.delete(arg.username).subscribe(
      data => {
        console.log("Usuario eliminado")
      },
      err => {

      }
    );
  }

  userEdit(arg: any):void {
    this.username = arg.username;
    this.modalManageUsersEdit.user = arg;
    
    this.modalManageUsersEdit.username = arg.username;
    this.modalManageUsersEdit.password = arg.password;
  }

  saveChanges(): void {
    /*console.log(this.modalManageUsersEdit.user.username)
    console.log(this.modalManageUsersEdit.username)*/
    this.modalManageUsersEdit.user.username = this.modalManageUsersEdit.username
    this.modalManageUsersEdit.user.password = this.modalManageUsersEdit.password
  
    const user: User = this.modalManageUsersEdit.user;
    this.userService.updateByUsername(this.username, user).subscribe(
      data => {
        this.notifier.notify('success', data.message);
      },
      err => {
        console.log("asdad")
      }
    );
  }
}
