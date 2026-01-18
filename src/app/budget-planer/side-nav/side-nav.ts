import { Component } from '@angular/core';
import{MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
isslideout=true;
constructor(private router:Router){}
toggleslideout(){
  this.isslideout=!this.isslideout;
}
ondash(){
  this.router.navigate(['/budget-planer/dashboard']);
}
onprofile(){
  this.router.navigate(['/budget-planer/profile']);
}
onhistory(){
  this.router.navigate(['/budget-planer/history']);
}
onlogout(){
this.router.navigate(['./budget-planer/login'])
}
}
