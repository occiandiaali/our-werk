import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWerkPage } from './our-werk.page';

describe('OurWerkPage', () => {
  let component: OurWerkPage;
  let fixture: ComponentFixture<OurWerkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurWerkPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWerkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
