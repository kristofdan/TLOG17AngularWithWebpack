import { Component, Input } from '@angular/core';
import { Week } from '../../shared/classes/week';
import { PopupService } from '../../shared/services/popup.service/popup.component';

@Component({
  selector: '[week-component]',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
  providers: [PopupService],
})

export class WeekComponent {
  @Input() week: Week;

  constructor(private popUpService: PopupService) {}

  activate(date: number, event){
    if (event.target.classList.contains("simple-day")){
      //window.alert("Simple day!");
      let dateStringInCaption = document.querySelector("#calendar-table caption").id;
      let fullDate = new Date(dateStringInCaption);
      fullDate.setDate(date);
      this.popUpService.activateDay(fullDate);
    }
  }
}
