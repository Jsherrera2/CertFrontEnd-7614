import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionFormComponent } from './vinculacion-form.component';

describe('VinculacionFormComponent', () => {
  let component: VinculacionFormComponent;
  let fixture: ComponentFixture<VinculacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
