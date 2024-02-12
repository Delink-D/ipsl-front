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
      providers: [UserService]
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
      expect(user).toBeTruthy();
      expect(user.name).toBe('Ervin Howell');
    });
    const mockReq = testingController.expectOne(`${API_ENDPOINT}/users/${2}`);
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(users[1]);
  });

  it('Should test updateUser', () => {
    const user: User = {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "image": 'https://image.com/image-1.jpg',
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    };

    service.updateUser(user).subscribe((user: User) => {
      expect(user).toBeTruthy();
      expect(user.id).toBe(4);
      expect(user.name).toBe('Patricia Lebsack');
      expect(user.image).toBe('https://image.com/image-1.jpg');
      expect(user.company.name).toBe('');
    });
    const mockReq = testingController.expectOne(`${API_ENDPOINT}/users/${4}`);
    expect(mockReq.request.method).toEqual('PUT');
    let updatedUser: User = <User>users[3]
    updatedUser.company.name = '';
    updatedUser.image = 'https://image.com/image-1.jpg';
    mockReq.flush(updatedUser);
  });

  it('Should test deleteUser', () => {
    service.deleteUser(2).subscribe((res: void) => {
      expect(res).toBeTruthy();
      expect(res).toEqual(Object());
    });
    const mockReq = testingController.expectOne(`${API_ENDPOINT}/users/${2}`);
    expect(mockReq.request.method).toEqual('DELETE');
    const deletedList = users.filter(user => user.id !== 2);
    expect(deletedList.length).toBe(4);
    mockReq.flush({});
  });

  afterEach(() => {
    testingController.verify();
  });
});