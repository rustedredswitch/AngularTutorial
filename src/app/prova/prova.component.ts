import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  @Output() inviaDatiEvento = new EventEmitter<string>();
  nome = 'Luca';

  constructor() {}

  ngOnInit(): void {
    console.log(this.nome);
  }

  inviaDati() {
    this.inviaDatiEvento.emit(this.nome);
  }
}
