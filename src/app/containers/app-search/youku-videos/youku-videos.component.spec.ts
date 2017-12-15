import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoukuVideosComponent } from './youku-videos.component';

describe('YoukuVideosComponent', () => {
  let component: YoukuVideosComponent;
  let fixture: ComponentFixture<YoukuVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoukuVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoukuVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
