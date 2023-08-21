import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './pages/auth/authorization/authorization.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent, AuthorizationComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
