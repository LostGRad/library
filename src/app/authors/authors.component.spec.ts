import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUTHORSComponent } from './authors.component';

describe('AUTHORSComponent', () => {
  let component: AUTHORSComponent;
  let fixture: ComponentFixture<AUTHORSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUTHORSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUTHORSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
