import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

export enum Key {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Escape = 27,
  ArrowLeft = 37,
  ArrowRight = 39,
  ArrowUp = 38,
  ArrowDown = 40
}

@Component({
  selector: 'app-navbar-menu',
  template: `
    <button class="btn btn-navbar btn-link ux-maker btn-toggle"
      (click)="toggleMenu()">
      <i class="fa fa-ellipsis-v"></i>
      <i *ngIf="appVersion.isNewAvailable" class="pulse update-indicator fa fa-dot-circle-o text-primary"></i>
    </button>
    <div class="panel panel-default menu-dropdown"
      [class.slideInDown]="!hide"
      >
      <div class="menu-backdrop" *ngIf="!hide" (click)="hideMenu()"></div>
      <div class="list-group">
        <div *ngIf="appVersion.isNewAvailable" class="list-group-item">
          <button class="btn btn-success" title="click to update Echoes"
            (click)="handleVersionUpdate()">
            New Version Is Available - UPDATE NOW
          </button>
        </div>
        <a class="list-group-item  x-icon"  >
        <i class="iconfont icon-feiji" > </i> &nbsp;&nbsp;&nbsp;  翻墙下载  <a href="/assets/shadowsocks/shadowsocks_settings.png" target="_blank"> 配置指南</a>
        </a>
        <a class="list-group-item x-icon" href="https://itunes.apple.com/us/app/shadowsocks/id665729974?ls=1&mt=8" target="_blank">
       <i  class="iconfont icon-ios"></i> IOS
        </a>
        <a class="list-group-item x-icon" *ngIf="!hide"  href="https://play.google.com/store/apps/details?id=com.github.shadowsocks" target="_blank">
     <i class="iconfont icon-android"> </i> 安卓
        </a>
        <a class="list-group-item x-icon" *ngIf="!hide" href="/assets/shadowsocks/shadowsocks-win10.zip" target="_blank">
        <i class="iconfont icon-win1"> </i> win10
           </a>
           
        <a class="list-group-item"  href="/assets/shadowsocks/shadowsocks-win7.rar" target="_blank">
        <i class="iconfont icon-win"></i>  win7
        
        </a>
        
        
        <div class="list-group-item">
          主题: <button-group [buttons]="theme.themes" [selectedButton]="theme.selected"
            (buttonClick)="updateTheme($event)"></button-group>
        </div>
      
        <button class="list-group-item"
          *ngIf="signedIn"
          (click)="handleSignOut()">
          <i class="fa fa-sign-out"></i> Sign Out
        </button>
      </div>
      <a class="list-group-item" (click)="showDevelopers=!showDevelopers" >
      
      <i class="iconfont icon-21"></i> 开发者  <i class="fa fa-bars " style="    float: right;
      line-height: 3rem;margin-right:1rem"></i>
      
      </a>
    <ng-container *ngIf="showDevelopers" >
      <a class="list-group-item" *ngFor="let developer of developers" >
      
      <i class="fa fa-heart text-danger"></i>  {{developer.nickname}}    <a  >QQ: <i class="iconfont icon-qq"></i></a>  <a> email:<i class="iconfont icon-EmailHili" ></i></a>
      
      </a>
      </ng-container>
    </div>
  `,
  styleUrls: ['./app-navbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarMenuComponent implements OnInit {
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
