import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScrollableService} from "../services/scrollable.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit{
  @ViewChild('sectionExperiences') elementRef!: ElementRef;

  constructor(private scrollableService: ScrollableService) {}

  ngOnInit() {
    this.scrollableService.scrollToElement$.subscribe(id => {
      if (id === 'experiences') {
        this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
