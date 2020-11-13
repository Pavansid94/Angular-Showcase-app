import { Hero } from './../heroes/hero';
import { HeroSelectedService } from './../hero-selected.service';
import { Component, OnInit } from '@angular/core';
import {heroes} from '../heroes/mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  listOfHeroes: Hero[]=[];
  showAllHeroes:Boolean = false;
  heroNowSelected:Hero;

  constructor(private heroService: HeroService,private heroSelectedService:HeroSelectedService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.listOfHeroes = heroes.slice(0,10));
  }

  showHeroes(){
    this.showAllHeroes = !this.showAllHeroes;
  }

  setHeroClicked(event){
    console.log("event in dashboard: "+event)
    this.heroSelectedService.setHeroSelected(event);
    var heroId;
    this.heroSelectedService.getHeroSelected().subscribe(val => {
      heroId =val});
    console.log("this.heroNowSelected: ",heroId)
    this.heroService.getHero(heroId)
      .subscribe(hero => this.heroNowSelected = hero);
  }

  updateHero(updatedHero){
    this.heroService.updateHero(updatedHero).subscribe();
  }
}