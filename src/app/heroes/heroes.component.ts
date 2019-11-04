import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor() { }
  
  //we gave heroOG a "prototype" of Hero (Hero class from from hero.ts)
  heroOG: Hero = {
    id: 1,
    name: 'Windstorm',
    hero: true,
  };

  //heroSix does not have a "prototype" of Hero, therefore we can add additional properties
  heroSix = {
    id: 6,
    name: 'Baymax',
    hero: true,
    age: 6,
    power: 'healing'
  };

  //the list of heroes from mock-heroes.ts, importing the mock heros, the "prototype" of Hero is already declared in the mock heroes file
  heroes = HEROES;

  //doesn't need to use const/let/var to declare variable, can just state it on its own
  selectedHero: Hero; //event handler hero

  //function to listen for which hero is selected from heroes.component.html
  //"void" to denote this function is not returning anything. ex. 1+1 return 2, function(): num {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero)
  }

  ngOnInit() {
  }

}
