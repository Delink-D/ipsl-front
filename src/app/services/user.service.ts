import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../models/user';

import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  env = environment;
  API_ENDPOINT = this.env.API;

  constructor(private http: HttpClient) { }

  /**
   * Fetch all the users from the API
   * @returns {Users[]} list of users
   */
  getAllUsers(): Observable<User[]> {
    const users = this.http.get<User[]>(`${this.API_ENDPOINT}/users`);
    return users;
  }

  /**
   * Fetch a single user by passing in the user id
   * @param {Number} id user id
   * @returns {User} a single user
   */
  getSingleUser(id: number): Observable<User> {
    const user = this.http.get<User>(`${this.API_ENDPOINT}/users/${id}`);
    return user;
  }

  /**
   * Save a new user to the API
   * @param {User} user user object to save
   */
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_ENDPOINT}/users`, user);
  }
}
