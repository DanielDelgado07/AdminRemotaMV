import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredential } from 'src/app/model/userCredential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUsuario!: UserCredential;

  constructor(private route: Router) { 
    this.loginUsuario = new UserCredential();
  }

  ngOnInit(): void {
  }
  login(frmLogin: NgForm){
    this.route.navigate(['inicio']);
  }
}
