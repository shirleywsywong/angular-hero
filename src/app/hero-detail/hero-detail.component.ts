import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //add hero property with input decorator to denote that this hero is from an input
  //input is like "props", where it is being passed in from another component
  @Input() champion: Hero;

  constructor() { }

  ngOnInit() {
  }

}
