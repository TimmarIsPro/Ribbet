import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-the-time',
  templateUrl: './the-time.component.html',
  styleUrls: ['./the-time.component.css']
})
export class TheTimeComponent implements OnInit {

  clock = Observable
    .interval(1000)
    .map (() => new Date());

  constructor() { }

  ngOnInit() {
  }

}
