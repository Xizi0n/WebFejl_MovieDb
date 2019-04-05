import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterlistitemComponent } from './posterlistitem.component';

describe('PosterlistitemComponent', () => {
  let component: PosterlistitemComponent;
  let fixture: ComponentFixture<PosterlistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterlistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
