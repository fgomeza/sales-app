import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers(): Observable<User[]> {
    return of([
      {
        name: 'Fran',
        lastName: 'Fran',
        identification: 'Fran',
        amountCollected: 'Fran',
        referals: 'Fran'
      }
    ]);

  }
}
