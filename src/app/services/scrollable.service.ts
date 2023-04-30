import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollableService {
  private scrollToElement = new BehaviorSubject<string>('');

  scrollToElement$ = this.scrollToElement.asObservable();

  scrollTo(id: string) {
    this.scrollToElement.next(id);
  }
}
