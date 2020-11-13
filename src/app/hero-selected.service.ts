import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroSelectedService {

  private heroSelected$ = new BehaviorSubject<number>(null);

  constructor() { }

  getHeroSelected(){
    return this.heroSelected$.asObservable();
  }

  setHeroSelected(heroId:number){
    this.heroSelected$.next(heroId);
  }
}
