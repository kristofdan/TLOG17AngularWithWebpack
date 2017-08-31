import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})

export class PagerComponent {

  @Output() onClicked = new EventEmitter<string>();

  change(direction: string) {
    this.onClicked.emit(direction);
  }
}
