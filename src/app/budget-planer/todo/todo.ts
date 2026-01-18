import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {
  todoForm: any;
  selectedMonth: string;
  monthSelected: boolean = false;

  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 500, selected: false },
    { expenseType: 'Light Bill', expenseAmount: 1000, selected: true }
  ];

  februaryExpense: any[] = [
    { expenseType: 'Gas Bill', expenseAmount: 800, selected: false }
  ];

  marchExpense: any[] = [
    { expenseType: 'Internet', expenseAmount: 700, selected: false }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newTodo = { ...this.todoForm.value, selected: false };
      this.getFilteredExpenses().push(newTodo);
      this.todoForm.reset();
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
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

  toggleSelection(todo: any) {
    todo.selected = !todo.selected;
  }

  onBack() {
    this.router.navigate(['/budget-planer/dashboard']);
  }

  saveForm() {
    console.log("Todo list saved!");
  }
}