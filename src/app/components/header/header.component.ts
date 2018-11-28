import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private AuthService: AuthService
  ) {
  }

  ngOnInit() {

  }

  get isAuthenticate() {
    return this.AuthService.isAuthenticate;
  }

  logOut() {
    console.log('logOut')
    this.AuthService.logOut();
  }

}
