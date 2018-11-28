import { StorageService } from './../local-storage/storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  get isAuthenticate(): boolean {
    let token = this.storageService.get('token');

    return token ? true : false;
  }

  logOut() {
    this.storageService.clear();
    this.router.navigate(['/login']);
  }
}
