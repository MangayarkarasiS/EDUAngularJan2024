import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleChileComponent } from './life-cycle-chile.component';

describe('LifeCycleChileComponent', () => {
  let component: LifeCycleChileComponent;
  let fixture: ComponentFixture<LifeCycleChileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleChileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
