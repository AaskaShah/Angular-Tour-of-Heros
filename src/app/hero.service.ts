import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './heroes-data';

@Injectable()
export class HeroService {
  
  constructor() { }

  getHeroes() :Promise<Hero[]> {
      return Promise.resolve(HEROES);
  }

// this method demostrates how promise acts asyncronously to fetch data and renders other components till done.
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}

}
