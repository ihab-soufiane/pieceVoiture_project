import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhotorizedComponent } from './unhotorized.component';

describe('UnhotorizedComponent', () => {
  let component: UnhotorizedComponent;
  let fixture: ComponentFixture<UnhotorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnhotorizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnhotorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
