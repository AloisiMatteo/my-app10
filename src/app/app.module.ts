import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoriComponent } from './autori/autori.component';
import { FormsModule } from '@angular/forms';
import { AutoreComponent } from './autori/autore/autore.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoriComponent,
    AutoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
