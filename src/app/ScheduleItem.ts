import { dayOfWeekNumber } from './dayOfWeekNumber'

export class ScheduleItem {
  currentDay: dayOfWeekNumber; // TODO: Replace this with a service

  constructor (
    public dayOfWeek: dayOfWeekNumber,
    public day: string,
    public hours: string) {
  }

  get displayName(): string {
    if (this.currentDay === this.dayOfWeek) {
      return 'Today';
    }
    if ((this.currentDay + 1) % 7 === this.dayOfWeek) {
      return 'Tomorrow';
    }
    return this.day;
  }
}
