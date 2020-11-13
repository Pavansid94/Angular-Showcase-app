import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators'


import {Hero} from './heroes/hero';
import {heroes} from './heroes/mock-heroes';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl='http://localhost:8082/hero/';
  //'api/heroes';

  constructor(private msgService:MessageService,private httpClient:HttpClient) { }

  private errorHandler<T>(operation='operation',result?:T){

    return (error:any):Observable<T>=>{

      console.log(`${operation} failed`+error);
      return of(result as T)
    }
  }

  private log(msg:string){
    this.msgService.add('HeroService: '+msg)
      }

  getHeroes():Observable<Hero[]>{

    //this.msgService.add('got allheroes');
    return this.httpClient.get<any>(this.heroesUrl)
        //OR
    //return this.httpClient.get<Hero[]>(this.heroesUrl);
    .pipe(
      tap(heroes=>console.log(heroes)),
      catchError(this.errorHandler<any>('getHeroes',[]))
    );


    //without http i.e,with mock heroes
    // this.msgService.add('message1');
    // return of(heroes);
  }

   getHero(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}`;
    return this.httpClient.get<any>(url,{params:new HttpParams().set('id', `${id}`)})
    .pipe(
      tap(hero=>console.log(hero)),
      catchError(this.errorHandler<any>('getHero id = ${id}'))
    )

    //without http i.e, with mock heroes
    // this.msgService.add(`HeroService: fetched hero id=${id}`);
    // return of(heroes.find(hero => hero.id === id));
  }

  updateHero(hero:Hero):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.put(this.heroesUrl+"update",hero,httpOptions)
    .pipe(
      tap(updHero=>console.log(updHero)),
      catchError(this.errorHandler<any>('updateHero'))

    )
  }

  addHero(hero:Hero):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post(this.heroesUrl+"save",hero,httpOptions)
    .pipe(
      tap(updHero=>this.log('addHero')),
      catchError(this.errorHandler<any>('addHero'))

    )
  }

  deleteHero (hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}delete`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }; 

   // return this.httpClient.get<any>(url,{params:new HttpParams().set('id', `${id}`)})
    return this.httpClient.delete(url,{params:new HttpParams().set('id',`${id}`)})
    .pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.errorHandler('deleteHero'))
    );
  }
}
