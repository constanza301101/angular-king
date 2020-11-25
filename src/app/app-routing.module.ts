import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KingConjuntosComponent } from './king-conjuntos/king-conjuntos.component';
import { KingHomeComponent } from './king-home/king-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'conjuntos',
    pathMatch:'full'
  },
  {
    path:'conjuntos',
    component: KingConjuntosComponent
  },
  {
    path:'home',
    component: KingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
