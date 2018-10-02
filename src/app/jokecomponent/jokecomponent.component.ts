import { Component, OnInit,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-jokecomponent',
  templateUrl: './jokecomponent.component.html',
  styleUrls: ['./jokecomponent.component.css']
})
export class JokecomponentComponent implements OnInit,AfterViewInit {

  title ="joker1";
 rows=[];
   name="sahirmohamed" ;
  constructor() { }

  ngOnInit() {
  }

}
