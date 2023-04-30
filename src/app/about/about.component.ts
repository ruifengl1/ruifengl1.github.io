import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScrollableService} from "../services/scrollable.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  @ViewChild('sectionAbout') elementRef!: ElementRef;

  constructor(private scrollableService: ScrollableService) {}

  ngOnInit() {
    this.scrollableService.scrollToElement$.subscribe(id => {
      if (id === 'about') {
        this.elementRef.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
    });
  }
}
