import { Component, OnInit } from '@angular/core';
import { HeroForm } from '../hero-form';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  submitted = false;
  model = new HeroForm(1,'Santosh','3 years');
  constructor() { }
  
  ngOnInit() {
  }
  
  newHero() {
    this.model = new HeroForm(42, '', '');
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  } 
  
  onSubmit(){
    this.submitted = true;
  }

}