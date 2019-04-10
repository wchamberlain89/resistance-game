import { Component } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent {

  private loginMethod: String | null = null;

  constructor(public authService: AuthenticationService) {

  }

  showSignIn() {
    this.loginMethod = 'signIn';
  }

  showSignUp() {
    this.loginMethod = 'signUp';
  }

  back() {
    this.loginMethod = null;
  }

  // logout() {
  //   this.authService.logout();
  // }
  //
  // ngDoCheck() {
  //   this.user = firebase.auth().currentUser;
  //   if(this.user !== null) {
  //     this.userName = this.user.displayName;
  //   }

}
