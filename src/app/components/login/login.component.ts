import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from './../../services/local-storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  submitForm() {
    this.submitted = true;
    console.log('f', this.f);
    if (this.registerForm.invalid) {
    } else {
      let userName = this.f.userName.value;
      this.storageService.set('token', userName);
      this.router.navigate(['/home']);
    }
  }
}
