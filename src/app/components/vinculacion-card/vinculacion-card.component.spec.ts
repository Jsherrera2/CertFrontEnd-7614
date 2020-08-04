import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionCardComponent } from './vinculacion-card.component';

describe('VinculacionCardComponent', () => {
  let component: VinculacionCardComponent;
  let fixture: ComponentFixture<VinculacionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinculacionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinculacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
