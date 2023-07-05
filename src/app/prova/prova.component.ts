import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterContentInit
{
  cani = [
    {
      nome: 'Roger',
      razza: 'Golden Retriever',
      descrizione: `I Golden Retriever sono cani di taglia media con un mantello folto e dorato.
      Sono noti per la loro dolcezza e amichevolezza, sono l'ideale per famiglie e bambini.
      Sono intelligenti, socievoli e amano stare all'aria aperta.`,
    },
  ];

  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
}
