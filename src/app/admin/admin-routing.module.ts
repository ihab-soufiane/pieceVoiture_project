
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageCommandsComponent } from './manage-commands/manage-commands.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent 
  },{
    path: 'manageUsers',
    component: ManageUserComponent
  },{
    path: 'manageProducts',
    component: ManageProductsComponent
  },{
    path: 'manageCommands',
    component: ManageCommandsComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
