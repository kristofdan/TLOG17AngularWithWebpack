import { Day } from './day';

export class Week {
  days: Day[];

  constructor (days: Day[]) {
    this.days = days;
  }

  public getDays(){
    return this.days;
  }
}
