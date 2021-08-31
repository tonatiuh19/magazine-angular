import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowComponent } from './main-row.component';

describe('MainRowComponent', () => {
  let component: MainRowComponent;
  let fixture: ComponentFixture<MainRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
