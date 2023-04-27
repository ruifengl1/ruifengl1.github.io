import {Component, ElementRef, OnInit, VERSION, ViewChild} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name: string = "hello";

  constructor(private scroller: ViewportScroller,
              private router: Router) {}

  ngOnInit() {
    this.router.navigate(["/"]);
  }

  goToAboutMe(){
    this.scroller.scrollToAnchor("about");
  }

  goToSkills(){
    this.scroller.scrollToAnchor("skills");
  }

  goToExperiences(){
    this.scroller.scrollToAnchor("experiences");
  }
}
