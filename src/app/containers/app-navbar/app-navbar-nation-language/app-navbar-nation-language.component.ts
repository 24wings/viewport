import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

import {Key} from '../app-navbar-menu/app-navbar-menu.component';
@Component({
  selector: 'app-navbar-nation-language',
  templateUrl: './app-navbar-nation-language.component.html',
  styleUrls: ['./app-navbar-nation-language.component.scss']
})
export class AppNavbarNationLanguageComponent implements OnInit {

  showDevelopers :boolean=false;
  developers:{nickname?:string,qq?:string,email?:string}[]=[
    {nickname:'月影',qq:'2121718893',email:'2121718893@qq.com'},
    {nickname:'    A          z',qq:'524926126',email:'524926126@qq.com'}
  ]
  hide = true;
  @Input() signedIn = false;
  @Input() appVersion = {
    semver: '',
    isNewAvailable: false,
    checkingForVersion: false
  };
  @Input() theme = { themes: [], selected: '' };
  @Output() signOut = new EventEmitter();
  @Output() versionUpdate = new EventEmitter();
  @Output() versionCheck = new EventEmitter();
  @Output() themeChange = new EventEmitter();

  @HostListener('keyup', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (event.keyCode === Key.Escape) {
      this.hideMenu();
    }
  }

  constructor() { }

  ngOnInit() { }

  handleSignOut() {
    this.hideMenu();
    this.signOut.emit();
  }

  hideMenu() {
    this.hide = true;
  }

  toggleMenu() {
    this.hide = !this.hide;
  }

  handleVersionUpdate() {
    this.versionUpdate.emit();
  }

  handleVersionCheck() {
    this.versionCheck.emit();
  }

  updateTheme(theme) {
    this.themeChange.emit(theme);
  }
}
