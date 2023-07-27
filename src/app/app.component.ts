import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>; //not after inputSaluti means that variable is not null

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

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.inputSaluti);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputSaluti);
  }

  onClick(): void {
    console.log(this.inputSaluti.nativeElement.value);
    this.inputSaluti.nativeElement.value = this.title;
  }
}
