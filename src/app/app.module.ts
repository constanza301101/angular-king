import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KingListComponent } from './king-list/king-list.component';
import { KingCarritoComponent } from './king-carrito/king-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    KingListComponent,
    KingCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
