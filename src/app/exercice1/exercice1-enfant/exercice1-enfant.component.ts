import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input('result') public compteur: number;
  @Output() public result: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.result.emit(this.compteur + 1);
  }

  decrement() {
    this.result.emit(this.compteur - 1);
  }

}
