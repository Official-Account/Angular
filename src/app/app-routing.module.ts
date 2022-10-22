import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllUserComponent } from './all-user/all-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component'; 
const routes: Routes = [
  {
    path: "all-user",
    component: AllUserComponent
    }, 
    {
      path: "add-user",
      component: AddUserComponent
      },
      {
        path: "updateUser/:id",
        component: EditUserComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
