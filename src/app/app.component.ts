import {Component, ElementRef, OnInit, VERSION, ViewChild} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private scroller: ViewportScroller,
              private router: Router) {}

  ngOnInit() {
    this.router.navigate(["/"]);
  }
}
