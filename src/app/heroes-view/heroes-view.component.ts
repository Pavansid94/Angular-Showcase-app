import { Hero } from './../heroes/hero';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes-view',
  templateUrl: './heroes-view.component.html',
  styleUrls: ['./heroes-view.component.css']
})
export class HeroesViewComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() heroClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  heroSelected(event){
    console.log("event: ")
    console.log(event)
    this.heroClicked.emit(event.id);
  }

}
