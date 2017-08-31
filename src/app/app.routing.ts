import { RouterModule, Routes } from '@angular/router';

import { CalendarViewComponent } from './calendar-view/calendar-view.component/calendar-view.component';
import { TaskListViewComponent } from './task-list-view/task-list-view.component/task-list-view.component';

const routes: Routes = [
    { path: '', redirectTo: '/calendar', pathMatch: 'full' },
    { path: 'calendar', component: CalendarViewComponent },
    { path: 'task-list', component: TaskListViewComponent },
];

export const routing = RouterModule.forRoot(routes);
