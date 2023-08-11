import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioService } from 'src/app/servizi/servizio/servizio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  id: number | undefined;
  persona: any;

  constructor(
    private route: ActivatedRoute,
    private servizio: ServizioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.persona = this.servizio.getPersona(this.id);
    });
  }
}
