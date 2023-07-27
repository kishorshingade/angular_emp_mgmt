import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:_id", component:EditComponent},
  {path:"", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"*", component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
