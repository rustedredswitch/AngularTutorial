import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTutorial';
  isVisible: Boolean = true;

  persone = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true },
    { nome: 'Marco', cognome: 'Verdi', isOnline: false },
    { nome: 'Anna', cognome: 'Neri', isOnline: true },
  ];

  onClick(event: Event) {
    this.title = 'Hai cliccato il bottone';
    this.isVisible = !this.isVisible;
  }
}
