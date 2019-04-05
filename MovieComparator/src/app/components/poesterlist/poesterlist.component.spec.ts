import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesterlistComponent } from './poesterlist.component';

describe('PoesterlistComponent', () => {
  let component: PoesterlistComponent;
  let fixture: ComponentFixture<PoesterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoesterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
