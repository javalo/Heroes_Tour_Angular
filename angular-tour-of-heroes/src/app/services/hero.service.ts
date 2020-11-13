import { Injectable } from '@angular/core';
import { Hero } from './../interfaces/hero';
import { HEROES } from './../mocks/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  /*getHeroes(): Hero[] {
    return HEROES;
  }*/

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
