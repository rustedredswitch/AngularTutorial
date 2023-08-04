import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioService } from 'src/app/servizi/servizio/servizio.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  persone: any;
  isProfile: boolean = false;

  constructor(
    private servizio: ServizioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persone = this.servizio.getPersona(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    } else {
      this.isProfile = false;
      this.persone = this.servizio.getPersone();
    }
  }
}
