import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/moduls/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


const routes: Routes = [
  { path: '', canActivate: [AuthGuard], children: [
    { path: 'bookings', component: AdminBookingsComponent },
    { path: 'users', component: AllUsersComponent },
    { path: 'add-blog', component: AddBlogComponent },
  ]},
];

@NgModule({
  declarations: [
    AllUsersComponent,
    AddBlogComponent,
    AdminBookingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatPaginatorModule,
    MatNativeDateModule
  ],
  exports: []
})
export class AdminModule { }
