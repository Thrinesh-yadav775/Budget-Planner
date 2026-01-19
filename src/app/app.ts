import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Login } from "./budget-planer/login/login";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, MatIconModule, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('budget-planner');
}
