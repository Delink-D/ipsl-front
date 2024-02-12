import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user';
import { TestBed } from '@angular/core/testing';
import { users } from '../mock-data/users';

describe('User Service', () => {
  let service: UserService;
  const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(UserService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('Should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('Should test getAllUsers', () => {
    service.getAllUsers().subscribe((users: User[]) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(5);
    });
    const mockReq = testingController.expectOne(`${API_ENDPOINT}/users`);
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(users));
  });

  it('Should test getSingleUser', () => {
    service.getSingleUser(2).subscribe((user: User) => {
      console.log(user.name)
      expect(user).toBeTruthy();
      expect(user.name).toBe('Ervin Howell');
    });
    const mockReq = testingController.expectOne(`${API_ENDPOINT}/users/${2}`);
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(users[1]);
  });
});