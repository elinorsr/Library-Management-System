import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from 'server/auth.service'; // Correct the path if necessary
import { AdventuresPageComponent } from './Adventures-page/Adventures-page.component';
import { AlchemistPageComponent } from './Alchemist-page/Alchemist-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksPageComponent } from './books-page/books-page.component';
import { CollectorPageComponent } from './collector-page/collector-page.component';
import { ConquestPageComponent } from './Conquest-page/Conquest-page.component';
import { digitalbookssPageComponent } from './digitalbooks-page/digitalbooks-page.component';
import { forfunPageComponent } from './forfunpage/forfun-page.component';
import { genesisPageComponent } from './genesis-page/genesis-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { hopelessPageComponent } from './hopeless-page/hopeless-page.component';
import { iconPageComponent } from './icon-page/icon-page.component';
import { InvisiblePageComponent } from './Invisible-page/Invisible-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaybePageComponent } from './maybe-page/maybe-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RiceymanPageComponent } from './Riceyman-page/Riceyman-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SharedStylesComponent } from './shared-styles/shared-styles.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ThecatPageComponent } from './Thecat-page/Thecat-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    booksPageComponent,
    LoginPageComponent,
    hopelessPageComponent,
    MaybePageComponent,
    genesisPageComponent,
    SharedStylesComponent,
    ThecatPageComponent,
    digitalbookssPageComponent,
    AdventuresPageComponent,
    InvisiblePageComponent,
    AlchemistPageComponent,
    ConquestPageComponent,
    RiceymanPageComponent,
    SignupPageComponent,
    iconPageComponent,
    SearchPageComponent,
    forfunPageComponent,
    CollectorPageComponent // Add CollectorPageComponent here
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
