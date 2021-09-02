import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './controle/home/home.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { FooterComponent } from './nav/footer/footer.component';
import { ContatoComponent } from './controle/contato/contato.component';
import { AjudaComponent } from './controle/ajuda/ajuda.component';
import { SobreComponent } from './controle/sobre/sobre.component';
import { ServicoComponent } from './controle/servico/servico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    AjudaComponent,
    SobreComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
