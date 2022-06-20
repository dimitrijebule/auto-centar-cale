import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'add-update', component:AddUpdateComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
