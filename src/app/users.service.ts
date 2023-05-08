import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // EndPoint utenti, dietro questo URL troveremo i nostri dati
  usersURL: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersURL)
    .pipe(
      map(responseDati => {
        let arrayUser: User[] = []

        responseDati.forEach(user => { arrayUser.push(user) })
        return arrayUser
      })
    )
  }
}
