import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, validate } from '@angular/forms/signals';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
loginForm:any;
registerForm:any;
// activeForm:string="login";
activeForm:'login'|'register'='login';
constructor(private fb:FormBuilder,private router:Router,private snackbar:MatSnackBar){}
  ngOnInit(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
toggleform(form:'login'|'register'){
 this.activeForm=form;
}
login(){
  if(this.loginForm.valid){
    console.log("login info==>",this.loginForm.value);
    this.router.navigate(['/budget-planer/dashboard']);
  }else{
    this.snackbar.open('invalid email or passsword','close',{duration:3000});
  }
}
register(){
  if(this.registerForm.valid){
    console.log("register info===>",this.registerForm.value);
    setTimeout(()=>{
      window.location.reload();
    },2000);
    this.router.navigate(['/nudget-planner/login']);
    }else{
      this.snackbar.open("please fill all fields correctlt","close",{duration:3000});
    }
}

}
