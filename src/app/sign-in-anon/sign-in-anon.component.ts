import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { routing } from '../app.routing';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in-anon',
  templateUrl: './sign-in-anon.component.html',
  styleUrls: ['./sign-in-anon.component.scss'],
  providers: [AuthenticationService]
})

export class SignInAnonComponent implements OnInit {

  searchValue:string = '';
  clearSearch() {
    this.searchValue = ' ';
  }
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(username) {
    if(username.length > 0) {
      this.authService.loginAnon(username)

    }
  }

}
// export class SignInAnonComponent {
// }
