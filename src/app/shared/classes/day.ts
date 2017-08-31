export class Day{
  type: string;
  date: number;
  extraMinutes: number;

// Type should be: "empty", "simple" or "work"
  constructor(type: string, date: number, extraMinutes: number) {
    this.type = type;
    this.date = date;
    this.extraMinutes = extraMinutes;
  }
}
