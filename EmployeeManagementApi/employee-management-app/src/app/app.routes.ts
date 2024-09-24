import { Routes } from '@angular/router';
import { EmployeeTableeComponent } from './employee-tablee/employee-tablee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const routes: Routes = [
    {path: '', component: EmployeeTableeComponent},
    {path: 'create', component: EmployeeFormComponent},
    {path: 'edit/:id', component: EmployeeFormComponent},
    {path: 'employees', redirectTo: '', pathMatch: 'full'}
];
