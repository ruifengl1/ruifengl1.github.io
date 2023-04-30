import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {ScrollableService} from "../services/scrollable.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  @ViewChild('sectionSkills') elementRef!: ElementRef;

  constructor(private scrollableService: ScrollableService) {}

  ngOnInit() {
    this.scrollableService.scrollToElement$.subscribe(id => {
      if (id === 'skills') {
        this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
