import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewCartComponent } from './user-view-cart.component';

describe('UserViewCartComponent', () => {
  let component: UserViewCartComponent;
  let fixture: ComponentFixture<UserViewCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
