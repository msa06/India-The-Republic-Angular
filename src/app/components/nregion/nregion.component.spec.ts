import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NregionComponent } from './nregion.component';

describe('NregionComponent', () => {
  let component: NregionComponent;
  let fixture: ComponentFixture<NregionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NregionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
