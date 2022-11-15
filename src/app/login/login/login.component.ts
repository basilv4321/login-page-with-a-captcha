import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mycaptcha:any=['012','345','abc','sg12e','12ewa','abc1']
  captcha:any
  no:number=0
  typedCap:any=""
  captchaValid:boolean=false

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.captcha=this.mycaptcha[this.no]
  }

  captchaFail(){
    this.no=this.no+1
    
    this.captcha=this.mycaptcha[this.no]
  }
  
  getCap(event:any){
    this.typedCap=event.target.value
  }

  login(){
    if(this.captcha==this.typedCap){
      alert("successful")
      if(this.captchaValid){
        this.captchaValid=!this.captchaValid
      }
      
    }
    else{
      this.captchaFail()
      if(this.captchaValid==false){
        this.captchaValid=!this.captchaValid
      }
    }
  }

  navigateToRegister(){
    this.router.navigateByUrl("/register")
  }
  

}
