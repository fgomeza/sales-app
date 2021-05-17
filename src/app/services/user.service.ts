import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User.model';

const USERS: string = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers(): Observable<User[]> {
    let json = localStorage.getItem(USERS);
    let users: any[] = json !== null ? JSON.parse(json) : [];
    return of(users);
  }

  create(user: User): void {
    this.getAllUsers().subscribe(users => {
      users.push(user);
      localStorage.setItem(USERS, JSON.stringify(users));
    });
  }
}
