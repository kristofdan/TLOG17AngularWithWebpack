import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SimpleDayComponent } from './calendar-view/simple-day.component/simple-day.component';
import { WorkDayComponent } from './calendar-view/work-day.component/work-day.component';
import { WeekComponent } from './calendar-view/week.component/week.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component/calendar-view.component';
import { CalendarTableComponent } from './calendar-view/calendar-table.component/calendar-table.component';
import { PagerComponent } from './calendar-view/pager.component/pager.component';
import { MonthlyStatisticsComponent } from './calendar-view/monthly-statistics.component/monthly-statistics.component';
import { DailyStatisticsComponent } from './task-list-view/daily-statistics.component/daily-statistics.component';
import { TaskListViewComponent } from './task-list-view/task-list-view.component/task-list-view.component';
import { TaskListTableComponent } from './task-list-view/task-list-table.component/task-list-table.component';
import { PopupService } from './shared/services/popup.service/popup.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      routing
  ],
  declarations: [
      AppComponent,
      CalendarViewComponent,
      NavbarComponent,
      TaskListViewComponent,
      SimpleDayComponent,
      WorkDayComponent,
      WeekComponent,
      CalendarTableComponent,
      PagerComponent,
      MonthlyStatisticsComponent,
      DailyStatisticsComponent,
      TaskListTableComponent,
      PopupService,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
