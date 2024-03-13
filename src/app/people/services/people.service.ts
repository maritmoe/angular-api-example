import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  get people(): Promise<Person[]> {
    const somePeople = fetch(`${environment.apiUrl}/people`)
      .then((res) => res.json())
      .then((result) => result.results);
    return somePeople;
  }
}
