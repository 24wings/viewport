import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { RouterModule } from '@angular/router';

import { AppNavbarComponent } from './app-navbar.component';
import { AppNavbarMenuComponent } from './app-navbar-menu';
import { AppNavbarUserComponent } from './app-navbar-user';
import {AppNavbarNationLanguageComponent} from './app-navbar-nation-language/app-navbar-nation-language.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    AppNavbarNationLanguageComponent,
    AppNavbarComponent,
    AppNavbarMenuComponent,
    AppNavbarUserComponent
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class AppNavbarModule { }
