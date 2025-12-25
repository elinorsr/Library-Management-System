import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventuresPageComponent } from './Adventures-page/Adventures-page.component';
import { AlchemistPageComponent } from './Alchemist-page/Alchemist-page.component';
import { booksPageComponent } from './books-page/books-page.component';
import { CollectorPageComponent } from './collector-page/collector-page.component';
import { ConquestPageComponent } from './Conquest-page/Conquest-page.component';
import { digitalbookssPageComponent } from './digitalbooks-page/digitalbooks-page.component';
import { forfunPageComponent } from './forfunpage/forfun-page.component'; // Correct import path
import { genesisPageComponent } from './genesis-page/genesis-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { hopelessPageComponent } from './hopeless-page/hopeless-page.component';
import { iconPageComponent } from './icon-page/icon-page.component';
import { InvisiblePageComponent } from './Invisible-page/Invisible-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaybePageComponent } from './maybe-page/maybe-page.component';
import { RiceymanPageComponent } from './Riceyman-page/Riceyman-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ThecatPageComponent } from './Thecat-page/Thecat-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'books', component: booksPageComponent },
  { path: 'collector', component: CollectorPageComponent },
  { path: 'hopeless', component: hopelessPageComponent },
  { path: 'maybe', component: MaybePageComponent },
  { path: 'genesis', component: genesisPageComponent },
  { path: 'Thecat', component: ThecatPageComponent },
  { path: 'digitalbooks', component: digitalbookssPageComponent },
  { path: 'Adventures', component: AdventuresPageComponent },
  { path: 'Riceyman', component: RiceymanPageComponent },
  { path: 'Conquest', component: ConquestPageComponent },
  { path: 'Alchemist', component: AlchemistPageComponent },
  { path: 'Invisible', component: InvisiblePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'icon', component: iconPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'forfun', component: forfunPageComponent }, // Add route for the forfun page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
