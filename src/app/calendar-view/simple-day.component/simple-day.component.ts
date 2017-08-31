import { Component, Input } from '@angular/core';
import { Day } from '../../shared/classes/day';

@Component({
  selector: 'simple-day',
  templateUrl: './simple-day.component.html',
  styleUrls: ['./simple-day.component.css']
})
export class SimpleDayComponent {

  @Input() day: Day;
}
