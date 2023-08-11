import { Component, OnInit } from '@angular/core';
import { ServizioService } from 'src/app/servizi/servizio/servizio.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  persone: any;

  constructor(
    private servizio: ServizioService,
  ) {}

  ngOnInit(): void {
    this.persone = this.servizio.getPersone();
  }
}
