import { Component, Input } from '@angular/core';
import {Day} from '../../shared/classes/day';

@Component({
  selector: 'work-day',
  templateUrl: './work-day.component.html',
  styleUrls: ['./work-day.component.css'],
})

export class WorkDayComponent {

  @Input() day: Day;
}
