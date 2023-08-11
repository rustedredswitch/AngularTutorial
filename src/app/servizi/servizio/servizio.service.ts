import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioService {
  private persone = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true },
    { nome: 'Marco', cognome: 'Verdi', isOnline: false },
    { nome: 'Anna', cognome: 'Neri', isOnline: true },
    { nome: 'Gino', cognome: 'Arancioni', isOnline: true },
    { nome: 'Pino', cognome: 'Viole', isOnline: true },
    { nome: 'Franco', cognome: 'Gialli', isOnline: true },
    { nome: 'Giuseppe', cognome: 'Bianchi', isOnline: true },
  ];

  constructor() {}

  getPersone() {
    return this.persone;
  }

  getPersona(index: number): any {
    return this.persone[index];
  }
}
