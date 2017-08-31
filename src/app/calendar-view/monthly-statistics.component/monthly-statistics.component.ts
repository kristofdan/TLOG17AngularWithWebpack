import { Component } from '@angular/core';

@Component({
  selector: 'monthly-statistics',
  templateUrl: './monthly-statistics.component.html',
  styleUrls: ['./monthly-statistics.component.css']
})

export class MonthlyStatisticsComponent {

  statisticsTest = {sumPerMonth: 2000, requiredMinPerMonth: 1800, extraMinPerMonth: 200};
}
