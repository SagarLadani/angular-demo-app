import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from './../../services/validator/validator.service';
import { StorageService } from './../../services/local-storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {
        validator: this.validatorService.isMatching('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  submitForm() {
    this.submitted = true;
    console.log('f', this.f);
    if (this.registerForm.invalid) {
      console.log('registerForm invlid')
    } else {
      console.log('registerForm Valid Sucess')
      let email = this.f.email.value;
      this.storageService.set('token', email);
      this.router.navigate(['/home']);
    }
  }

}
