import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'https://reqres.in/api';

  constructor(private httpClient: HttpClient) { }

  findUser(): Observable<User[]> {
    return this.httpClient.get(`${this.baseURL}/users?per_page= 6`).pipe(
      map(
        (response: ApiResponse) => response.data.map(user => new User().deserialize(user))
      )
    );
  }
}
