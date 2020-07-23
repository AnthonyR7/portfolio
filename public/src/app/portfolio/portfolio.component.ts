import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // workD = django, workA = angular
  div1: boolean = true;
  div2: boolean = false;
  div3: boolean = false;
  toggle = true;
  otherTog = false;

  showDjango() {
      this.div1 = true;
      this.div2 = false;
      this.div3 = false;
      if (this.toggle === false) {
        this.toggle = true;
        this.otherTog = false;
      }
  }

  showArt() {
      this.div2 = true;
      this.div1 = false;
      this.div3 = false;
      if (this.toggle === false) {
        this.toggle = true;
        this.otherTog = false;
      }
  }

  showPoke() {
      this.div3 = true;
      this.div2 = false;
      this.div1 = false;
      if (this.otherTog === false) {
        this.toggle = false;
        this.otherTog = true;
      }
  }

  constructor() {
   }
  ngOnInit(): void {
  }
}
