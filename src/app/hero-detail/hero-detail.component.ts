import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Hero } from '../heroes/hero';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
import { HeroService } from '../hero.service';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  @Output() heroUpdatedVal = new EventEmitter<Hero>();
  /* const observer = {
    next => console.log("On Success callback..."),
    error: msg => console.log("error occured while updating..."+msg),
    () => {console.log("On Completed callback...")
      this.goBack()}
  } */
  
  constructor(private location:Location,private activatedroute:ActivatedRoute,private heroservice:HeroService) { }

  ngOnInit() {
    /* this.getHero(); */
  }

  getHero(): void {
    console.log(this.activatedroute.snapshot)
    const id = +this.activatedroute.snapshot.paramMap.get('id');
    this.heroservice.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroUpdatedVal.emit(this.hero);
    /* this.heroservice.updateHero(this.hero)
      .subscribe(() =>{
        this.goBack();
      },
      (error) =>{
        console.log("some error occurred...")
      },
    () =>{
      console.log("Completed...")
    }) */
}

  goBack(): void {
    this.location.back();
  }

}
