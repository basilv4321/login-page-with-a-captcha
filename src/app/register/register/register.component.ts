import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login/login.component';
import { FormGroup,FormControl } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=new FormGroup({
    "first_name":new FormControl(
      [""]
    )
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routingToLoginPage(){
    this.router.navigateByUrl("")
  }
}
