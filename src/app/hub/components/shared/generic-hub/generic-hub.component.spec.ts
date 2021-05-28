import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericHubComponent } from './generic-hub.component';

describe('GenericHubComponent', () => {
  let component: GenericHubComponent;
  let fixture: ComponentFixture<GenericHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
