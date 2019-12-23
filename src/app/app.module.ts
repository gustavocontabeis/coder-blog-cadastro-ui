import { UsuarioService } from './usuario/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/panel';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PanelModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
