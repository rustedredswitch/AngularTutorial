import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase/firebase.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  persone: any;

  constructor(private fire: FirebaseService) {}

  ngOnInit(): void {
    this.fire.getPersone().subscribe((data: any) => {
      console.log(Object.keys(data));
      this.persone = Object.keys(data).map((key) => {
        return data[key];
      });
    });
  }
}
