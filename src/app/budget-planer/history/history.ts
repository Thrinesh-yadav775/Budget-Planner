// history.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SideNav } from '../side-nav/side-nav';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SideNav],
  templateUrl: './history.html',
  styleUrl: './history.css'
})
export class History implements OnInit {
  todoForm: any;
  selectedMonth: string;

  // Data should ideally come from a shared service
  januaryExpense: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 }
  ];
  februaryExpense: any[] = [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Internet', expenseAmount: 700 }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: [this.selectedMonth, Validators.required]
    });
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
  }

  getFilteredExpenses() {
    switch (this.selectedMonth) {
      case 'January': return this.januaryExpense;
      case 'February': return this.februaryExpense;
      case 'March': return this.marchExpense;
      default: return [];
    }
  }

  calculateTotalExpense(month: string): number {
    return this.getFilteredExpenses().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  onBack() {
    this.router.navigate(['/budget-planer/dashboard']);
  }

  onSubmitExpense() {
    // History page is typically read-only, but method is kept for form structure
  }
}