import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NresourcesComponent } from './nresources.component';

describe('NresourcesComponent', () => {
  let component: NresourcesComponent;
  let fixture: ComponentFixture<NresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
