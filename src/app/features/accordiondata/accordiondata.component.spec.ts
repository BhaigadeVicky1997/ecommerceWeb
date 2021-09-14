import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordiondataComponent } from './accordiondata.component';

describe('AccordiondataComponent', () => {
  let component: AccordiondataComponent;
  let fixture: ComponentFixture<AccordiondataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordiondataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
