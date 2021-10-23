import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYProfileComponent } from './myprofile.component';

describe('MYProfileComponent', () => {
  let component: MYProfileComponent;
  let fixture: ComponentFixture<MYProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
