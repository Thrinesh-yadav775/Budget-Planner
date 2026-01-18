import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { SideNav } from '../side-nav/side-nav';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MatIcon,SideNav,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  //income
  lastmonthincome=['january:$1000','february:$1400','march:$1200'];
  currentmonthincome='$2000';
  //expense
    lastmonthexpense=['january:$800','february:$1000','march:$1200'];
  currentmonthexpense='$1500';
  //todo
  todotransactions=[
    {description:'pay electricity bill'},
    {description:'submit monthly report'},
    {description:'Buy groceries'},
    {description:'call insurance company'}
  ];

  totalcurrentmonthincome=2000;
  totalcurrentmonthexpense=1500;

  constructor(public router:Router){}
  onexpense(){
    this.router.navigate(['./budget-planer/expense'])
  }
  onincome(){
    this.router.navigate(['./budget-planer/income']);
  }
  ontodo(){
    this.router.navigate(['./budget-planer/todo'])
  }
  get currentmonthsaving():number
{
  return this.totalcurrentmonthincome - this.totalcurrentmonthexpense;
}}
