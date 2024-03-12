import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomedropzoneComponent } from './customedropzone.component';

describe('CustomedropzoneComponent', () => {
  let component: CustomedropzoneComponent;
  let fixture: ComponentFixture<CustomedropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomedropzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomedropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
