import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  http = inject(HttpClient);
  people: any;

  async getPeople() {
    const result = await firstValueFrom(
      this.http.get(`${environment.apiUrl}/people`)
    );
    // @ts-ignore
    this.people = result.results;
    return this.people;
  }
}
