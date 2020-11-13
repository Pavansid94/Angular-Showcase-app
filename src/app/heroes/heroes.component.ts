import { Component, OnInit } from '@angular/core';
import {Hero} from './Hero';
import {heroes} from './mock-heroes';
import {HeroService} from '../hero.service';
import {Observable,of} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers : [HeroService]
})
export class HeroesComponent implements OnInit {

  // name="Terminato";
  // id = 2;

  
  //listOfHeroes = heroes;
  listOfHeroes:Hero[];
   //additionalHero:Hero[];

  selectedHero:Hero;

  onSelect(hero:Hero):void{
 this.selectedHero = hero;
   }

  copyContents():Hero[]{

    //this.copy = Object.assign({}, this.listOfHeroes);
    // this.listOfHeroes.push(new Hero(this.id,this.name))
    // return this.listOfHeroes;
    return [];
  }
  
  constructor(private heroService:HeroService) {
   }

   getHeroes():void {
    // this.listOfHeroes = this.heroService.getHeroes();
    // return this.listOfHeroes;
    this.heroService.getHeroes().subscribe(heroes => this.listOfHeroes = heroes);
   };

  ngOnInit() { 

    this.getHeroes();
    // this.additionalHero=this.copyContents();
    // console.log(this.additionalHero)
  }

  add(name:string):void{

    name=name.trim();
    if(!name){
      return ;
    }
    else{
      this.heroService.addHero({name} as Hero)
      .subscribe(hero =>{
        this.listOfHeroes.push(hero);
        console.log(this.listOfHeroes)
      });
    }
  }

  delete(hero: Hero): void {
    this.listOfHeroes = this.listOfHeroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
