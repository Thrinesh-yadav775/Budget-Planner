import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'budget-planer',loadChildren:()=> import('./budget-planer/budget-planer-module').then(m=> m.BudgetPlanerModule)},
    
];
