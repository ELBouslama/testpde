import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authSerice: AuthService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signup(signupForm: NgForm) {
    console.log(signupForm)
    this.authSerice.signup(signupForm.value).subscribe(
      (response) => {
        this.toaster.success('Veuillez se connecter avec votre nouveau compte');
        this.router.navigate(['/signin']);
      },
      (erreur) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    );
  }
}
