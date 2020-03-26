import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error: any;
  public loginForm: FormGroup;
  public isLoading: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, public angularFireAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['']
    });
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      this.loginForm.disable();
      this.angularFireAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          this.router.navigateByUrl('/admin');
        })
        .catch(error => {
          this.loginForm.enable();
          this.error = error;
          this.isLoading = false;
        });
    }
  }
}
