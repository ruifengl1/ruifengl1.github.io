import {Component} from '@angular/core';
import {ScrollableService} from "../services/scrollable.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private scrollableService: ScrollableService) {}

  scrollToElement(id:string) {
    this.scrollableService.scrollTo(id);
  }

}
