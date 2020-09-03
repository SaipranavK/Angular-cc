import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrewComponent } from './brew/brew.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brew', component: BrewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
