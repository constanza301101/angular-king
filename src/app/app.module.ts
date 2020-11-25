import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KingListComponent } from './king-list/king-list.component';

import { FormsModule } from '@angular/forms';

import { KingCarritoComponent } from './king-carrito/king-carrito.component';
import { KingHomeComponent } from './king-home/king-home.component';
import { KingConjuntosComponent } from './king-conjuntos/king-conjuntos.component';

@NgModule({
  declarations: [
    AppComponent,
    KingListComponent,
    KingCarritoComponent,
    KingHomeComponent,
    KingConjuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
