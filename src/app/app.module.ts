
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GradosCentComponent } from './formConversion/grados-cent/grados-cent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MultiplicarComponent } from './formulario/multiplicar/multiplicar.component';
import { VentasComponent } from './cine/ventas/ventas.component';
import { CineModule } from './material/cine/cine.module';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicarComponent,
    GradosCentComponent,
    VentasComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CineModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
