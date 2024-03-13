import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrl: './person-view.component.css',
})
export class PersonViewComponent {
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  http = inject(HttpClient);

  person: any;

  async ngOnInit() {
    const result = await firstValueFrom(
      this.http.get(`${environment.apiUrl}/people/${this.id}`)
    );
    // @ts-ignore
    if (result.result) {
      // @ts-ignore
      this.person = result.result;
    } else {
      this.person = null;
    }
  }
}
