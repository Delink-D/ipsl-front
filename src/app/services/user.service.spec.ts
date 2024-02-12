import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { User } from '../models/user';

describe('User Service', () => {
  let service: UserService;
  let http: HttpClient;
  const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

  beforeEach(() => {
    service = new UserService(http);
  });

  it('Should create the service', () => {
    expect(service).toBeTruthy();
  });

  // it('Should test getAllUsers', () => {
  //   const res: User[] = [];
    
  //   // jasmine.isSpy(http, 'get').mockReturnValue(of(res));
  //   service.getAllUsers();
  //   expect(http.get).toHaveBeenCalledTimes(1);
  //   expect(http.get).toHaveBeenCalledWith(API_ENDPOINT);
  //   // expect(http.get).tOhAVE;
  // });
});