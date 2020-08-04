import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionListComponent } from './vinculacion-list.component';

describe('VinculacionListComponent', () => {
  let component: VinculacionListComponent;
  let fixture: ComponentFixture<VinculacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
