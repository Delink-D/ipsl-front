import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserListComponent, HttpClientModule, BrowserAnimationsModule],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('Create Users-list Component', () => {
    expect(component).toBeTruthy();
  });
});