import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyreportComponent } from './warrantyreport.component';

describe('WarrantyreportComponent', () => {
  let component: WarrantyreportComponent;
  let fixture: ComponentFixture<WarrantyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarrantyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarrantyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
