import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSectionComponent } from './theme-section.component';

describe('ThemeSectionComponent', () => {
  let component: ThemeSectionComponent;
  let fixture: ComponentFixture<ThemeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
