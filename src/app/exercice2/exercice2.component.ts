import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('ref') public ref: ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  public updateValue() {
    this.valeur = this.ref.nativeElement.value;
  }
}
