import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarNationLanguageComponent } from './app-navbar-nation-language.component';

describe('AppNavbarNationLanguageComponent', () => {
  let component: AppNavbarNationLanguageComponent;
  let fixture: ComponentFixture<AppNavbarNationLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarNationLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarNationLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
