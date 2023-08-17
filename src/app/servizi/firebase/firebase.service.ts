import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  url: string =
    'https://angular-tutorial-rrs-default-rtdb.europe-west1.firebasedatabase.app/persone.json';

  constructor(private http: HttpClient) {}

  insertPersona(body: {}) {
    return this.http.post(this.url, body);
  }

  getPersone() {
    return this.http.get(this.url);
  }
}
