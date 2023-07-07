import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTutorial';

  persone = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true },
    { nome: 'Marco', cognome: 'Verdi', isOnline: false },
    { nome: 'Anna', cognome: 'Neri', isOnline: true },
    { nome: 'Gino', cognome: 'Arancioni', isOnline: true },
    { nome: 'Pino', cognome: 'Viole', isOnline: true },
    { nome: 'Franco', cognome: 'Gialli', isOnline: true },
    { nome: 'Giuseppe', cognome: 'Bianchi', isOnline: true },
  ];
}
