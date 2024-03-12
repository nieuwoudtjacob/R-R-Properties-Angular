import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetUploadComponent } from './cet-upload.component';

describe('CetUploadComponent', () => {
  let component: CetUploadComponent;
  let fixture: ComponentFixture<CetUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CetUploadComponent]
    });
    fixture = TestBed.createComponent(CetUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
