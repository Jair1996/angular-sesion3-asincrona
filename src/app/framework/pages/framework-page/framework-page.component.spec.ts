import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkPageComponent } from './framework-page.component';

describe('FrameworkPageComponent', () => {
  let component: FrameworkPageComponent;
  let fixture: ComponentFixture<FrameworkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
