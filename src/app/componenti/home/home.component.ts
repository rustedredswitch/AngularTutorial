import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('homeform') homeform!: NgForm; // Questo è un secondo metodo già visto e ugualmente funzionante

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    // console.log(this.homeform);
  }
}
