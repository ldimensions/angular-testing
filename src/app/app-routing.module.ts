import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './users/user-add/user-add.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user/add',
    component: UserAddComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
