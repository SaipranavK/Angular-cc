import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1;
  }

}
