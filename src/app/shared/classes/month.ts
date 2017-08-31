import { Week} from './week';
import {Day} from "./day";

export class Month {
  weeks: Week[];

  constructor(date: Date, workDays: Map<number,number>) {
    this.weeks = [];
    this.createWeeks(date, workDays);
  }

  createWeeks(date: Date, workDays: Map<number,number>): void{
    const monthLayout = this.calculateTbodySize(date);
    this.createWeeksFromLayout(monthLayout, workDays);
  }

  calculateTbodySize(date: Date) {
    const monthLengths: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const firstDayOfThisMonth = date;
    firstDayOfThisMonth.setDate(1);
    if (firstDayOfThisMonth.getFullYear() % 4 === 0){
      monthLengths[2] = 29;
    }

    let firstRowEmptyCellNumber;
    if (firstDayOfThisMonth.getDay() === 0){
      firstRowEmptyCellNumber = 6;
    }else {
      firstRowEmptyCellNumber = firstDayOfThisMonth.getDay() - 1;
    }
    const dayNumber = monthLengths[firstDayOfThisMonth.getMonth()];
    const cellNumber = dayNumber + firstRowEmptyCellNumber;
    let numberOfWeeks = cellNumber / 7;
    numberOfWeeks = Math.ceil(numberOfWeeks);
    const lastRowEmptyCellNumber = (numberOfWeeks * 7) -
      (firstRowEmptyCellNumber + dayNumber);

    const monthLayoutInfo = {numberOfWeeks: numberOfWeeks,
      firstRowEmptyCellNumber: firstRowEmptyCellNumber,
      lastRowEmptyCellNumber: lastRowEmptyCellNumber
    };
    return monthLayoutInfo;
  }

  // In the string passed to the Week constructor, the letters represent DayType-s
  // e = EmptyDay,
  // s = SimpleDay,
  // w = WorkDay.
  createWeeksFromLayout(monthLayout, workDays: Map<number,number>): void {
    this.createFirstWeek(monthLayout.firstRowEmptyCellNumber, workDays);

    let dateOfMondayInSecondWeek = 7 - monthLayout.firstRowEmptyCellNumber + 1;
    this.createFullWeeks(monthLayout.numberOfWeeks, dateOfMondayInSecondWeek,
      workDays);

    let dateOfLastMonday = dateOfMondayInSecondWeek +
      (monthLayout.numberOfWeeks - 2) * 7;
    this.createLastWeek(monthLayout.lastRowEmptyCellNumber, dateOfLastMonday,
      workDays);
  }

  private createFirstWeek(firstRowEmptyCellNumber: number, workDays: Map<number,number>): void {
    let emptyDaysOfFirstWeek: Day[] = [];
    for (let i = 0; i < firstRowEmptyCellNumber; ++i) {
      emptyDaysOfFirstWeek.push(new Day('empty',0,0));
    }

    let nonEmptyDaysOfFirstWeek: Day[] = this.createDaysStartingFrom(
      1, 7 - firstRowEmptyCellNumber, workDays);
    this.weeks.push(new Week(emptyDaysOfFirstWeek.concat(nonEmptyDaysOfFirstWeek)));
  }

  private createFullWeeks(numberOfWeeks: number, dateOfMondayInSecondWeek: number,
                          workDays: Map<number,number>): void {
    for (let i = 1; i < numberOfWeeks - 1; ++i) {
      let daysOfWeek = this.createDaysStartingFrom(
        dateOfMondayInSecondWeek + (( i - 1) * 7), 7, workDays);
      this.weeks.push(new Week(daysOfWeek));
    }
  }

  private createLastWeek(lastRowEmptyCellNumber: number, dateOfLastMonday: number,
                         workDays: Map<number,number>): void {
    let nonEmptyDaysOfLastWeek: Day[] = this.createDaysStartingFrom(
      dateOfLastMonday,7 - lastRowEmptyCellNumber, workDays);
    let emptyDaysOfLastWeek: Day[] = [];
    for (let i = 0; i < lastRowEmptyCellNumber; ++i) {
      emptyDaysOfLastWeek.push(new Day('empty',0,0));
    }
    this.weeks.push(new Week(nonEmptyDaysOfLastWeek.concat(emptyDaysOfLastWeek)));
  }

  /**
   * Creates an array of simple and/or working days
   * @return an array containing Days
   */
  private createDaysStartingFrom(from: number, numberOfDays: number,
                                 workDays: Map<number,number>): Day[] {
    let days: Day[] = [];
    let currentDay = from;
    for (let i = 0; i < numberOfDays; ++i, ++currentDay) {
      if (workDays.has(currentDay)){
        days.push(new Day('work',currentDay,workDays.get(currentDay)));
      }else {
        days.push(new Day('simple',currentDay,0));
      }
    }
    return days;
  }

  public getWeeks() {
    return this.weeks;
  }
}
