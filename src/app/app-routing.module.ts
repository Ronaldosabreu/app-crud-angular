import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';

const routes: Routes =
[
  {    path:'users', component: UsersComponent  },
  {    path:'users/create', component: CreateUsersComponent  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
