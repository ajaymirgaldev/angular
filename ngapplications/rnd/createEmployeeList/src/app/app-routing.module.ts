import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './view/create.component';
import { HomeComponent } from './view/home.component';
import { ListComponent } from './view/list.component';

const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"list", component:ListComponent},
    {path:"create", component:CreateComponent},
    {path:"", redirectTo:"/home", pathMatch:'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
