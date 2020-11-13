import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/mocks/mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] | undefined;
  //heroes = HEROES;
  //selectedHero: Hero | undefined;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
/*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
*/
 /* getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
*/

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes!.push(hero);
      });
  }



  delete(hero: Hero): void {
    this.heroes = this.heroes!.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }






}
