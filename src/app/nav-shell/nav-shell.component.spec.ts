/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavShellComponent } from './nav-shell.component';

describe('NavShellComponent', () => {
  let component: NavShellComponent;
  let fixture: ComponentFixture<NavShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
