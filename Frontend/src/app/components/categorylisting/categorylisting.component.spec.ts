import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistingComponent } from './categorylisting.component';

describe('CategorylistingComponent', () => {
  let component: CategorylistingComponent;
  let fixture: ComponentFixture<CategorylistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorylistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorylistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
