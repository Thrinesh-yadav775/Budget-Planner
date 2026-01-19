import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'budget-planer', pathMatch: 'full' },
    { path:'budget-planer',loadChildren:()=> import('./budget-planer/budget-planer-module').then(m=> m.BudgetPlanerModule)},
    
];
