import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewWishlistComponent } from './user-view-wishlist.component';

describe('UserViewWishlistComponent', () => {
  let component: UserViewWishlistComponent;
  let fixture: ComponentFixture<UserViewWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
