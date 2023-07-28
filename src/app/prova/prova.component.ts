import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../servizi/servizio/servizio.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  constructor(private servizio: ServizioService) {}

  ngOnInit(): void {
    console.log(this.servizio.getPersone());
  }
}
