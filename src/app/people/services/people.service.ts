import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  people: Person[] = [
    {
      uid: '100',
      name: 'Darth Mual',
      url: 'some url',
    },
    {
      uid: '200',
      name: 'Emperor Palpatine',
      url: 'some other url',
    },
  ];
}
