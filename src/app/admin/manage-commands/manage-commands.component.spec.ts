import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommandsComponent } from './manage-commands.component';

describe('ManageCommandsComponent', () => {
  let component: ManageCommandsComponent;
  let fixture: ComponentFixture<ManageCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCommandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
