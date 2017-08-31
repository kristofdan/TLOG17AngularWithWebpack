import { Component, OnInit } from '@angular/core';
import { Month } from '../../shared/classes/month';

@Component({
  selector: 'calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})

export class CalendarTableComponent implements OnInit{

  daysOfWeek: string[] = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
  private monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  private workDaysTest: Map<number,number> = new Map([[9,300],[16,300],[23,300],[29,300]]);

  month: Month;
  date: Date;

  constructor() {
    this.month = new Month(new Date(), this.workDaysTest);
    this.date = new Date();
  }

  ngOnInit() {
    this.setCaption(new Date());
  }

  private setCaption(date: Date) {
    let caption = document.querySelector("#calendar-table caption");
    caption.innerHTML = date.getFullYear() + " " + this.monthNames[date.getMonth()];
    caption.setAttribute("id",
      date.getFullYear() + "/" + String(date.getMonth() + 1));
  }

  changeMonth(direction: string){
    if (direction === 'next'){
      this.nextMonth();
    }else {
      this.previousMonth();
    }

    this.setCaption(this.date);
  }

  nextMonth() {
    if (this.date.getMonth() === 11){
      this.date.setFullYear(this.date.getFullYear() + 1);
      this.date.setMonth(0);
    }else {
      this.date.setMonth(this.date.getMonth() + 1);
    }

    this.month = new Month(this.date, this.workDaysTest);
  }

  previousMonth() {
    if (this.date.getMonth() === 0){
      this.date.setFullYear(this.date.getFullYear() - 1);
      this.date.setMonth(11);
    }else {
      this.date.setMonth(this.date.getMonth() - 1);
    }

    this.month = new Month(this.date, this.workDaysTest);
  }
}
