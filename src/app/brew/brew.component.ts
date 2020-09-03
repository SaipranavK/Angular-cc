import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-brew',
  templateUrl: './brew.component.html',
  styleUrls: ['./brew.component.css']
})
export class BrewComponent implements OnInit {

  brews: Object;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
