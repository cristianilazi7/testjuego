import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { AdminComponent } from './admin/admin.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'ahorcado/create',
    component: UserAddComponent
  },
  {
    path: 'ahorcado/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'ahorcado/user',
    component: UserGetComponent
  },
  {
    path: 'ahorcado/admin',
    component: AdminComponent
  },
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'ahorcado',
    component: AhorcadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
