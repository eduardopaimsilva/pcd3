import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InvestidorComponent } from './investidor/investidor.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './sobre/sobre.component';
import { StartupComponent } from './startup/startup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    InvestidorComponent,
    LoginComponent,
    NavbarComponent,
    SobreComponent,
    StartupComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
