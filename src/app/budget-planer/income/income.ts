import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dir } from "../../../../node_modules/@angular/cdk/types/_bidi-module-chunk";
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-income',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './income.html',
  styleUrl: './income.css',
})
export class Income {
  incomeform:any;
  selectedmonth:any;
  januaryincomes:any[]=[
    {source:'Salary',amount:5000,investments:"Mutual funds"},
    {source:'Freelancing',amount:2000,investments:"stocks"},
  ];
  febrauaryincomes:any[]=[
    {source:'Salary',amount:5200,investments:"Mutual funds"},
    {source:'Dividends',amount:300,investments:"Bonds"},
  ];
  marchincomes:any[]=[
    {source:'Salary',amount:5100,investments:"Mutual funds"},
    {source:'Rental Income',amount:800,investments:"Real Estate"},
  ];
  aprilincomes:any[]=[
    {source:'Salary',amount:5300,investments:"Mutual funds"},
    {source:'Freelancing',amount:1500,investments:"stocks"},
  ];
monthselected:boolean=false;
  constructor(public fb:FormBuilder ,public router:Router) { 
    const currentDate=new Date();
    this.selectedmonth=currentDate.toLocaleString('default',{month:'long'});
  }
  ngOnInit(): void {
    this.incomeform=this.fb.group({
      month:['',Validators.required],
      source:['',Validators.required],
      amount:['',Validators.required],
      investments:['',Validators.required],
    });
  }
onchange(event:any){
this.selectedmonth= event.target.value;
this.monthselected=true;
this.getfilteredincomes();
}
calculateTotalIncome(month: string):number {
  let totalincome=0;
  for(const income of this.getincomeformonth(month)){
    totalincome += income.amount;
}
return totalincome;
}
getincomeformonth(month:string){
switch(month){
  case 'January':
    return this.januaryincomes;
  case 'February':
    return this.febrauaryincomes;
  case 'March':
    return this.marchincomes;
    case 'April':
      return this.aprilincomes;
  default:
    return[];
}
}

getfilteredincomes(){
  let filteredincomes:any[]=[];
  switch(this.selectedmonth){
    case 'January':
      filteredincomes=[...this.januaryincomes];
      break;
    case 'February':
      filteredincomes=[...this.febrauaryincomes];
      break;
    case 'March':
      filteredincomes=[...this.marchincomes];
      break;
      case 'April':
        filteredincomes=[...this.aprilincomes];
      break;
    default:
      break
  }
  return filteredincomes;
}
onSubmit(){ 
if(this.incomeform.valid){
  const newincome=this.incomeform.value;
  switch(this.selectedmonth){
    case 'January':
      this.januaryincomes.push(newincome);
      break;
    case 'February':
      this.febrauaryincomes.push(newincome);
      break;
    case 'March':
      this.marchincomes.push(newincome);
      break;
      case 'April':
        this.aprilincomes.push(newincome);
        break;
      default:
      break;
}
this.incomeform.reset();
this.incomeform.patchValue({month:'',source:'',amount:'',investments:''});
}
}
saveform(){
  console.log("saved");
  setTimeout(() => {
     alert("Income details saved successfully!");
  },1000);
 
}
onback(){
  this.router.navigate(['./budget-planer/dashboard']);
}
}

