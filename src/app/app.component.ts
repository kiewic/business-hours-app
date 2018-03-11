import { Component } from '@angular/core';
import { ScheduleItem } from './ScheduleItem';
import { dayOfWeekNumber } from './dayOfWeekNumber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  schedule: ScheduleItem[] = [
    new ScheduleItem(6, 'Saturday',  '7:00 AM to 9:00 PM'),
    new ScheduleItem(0, 'Sunday',    '7:00 AM to 9:00 PM'),
    new ScheduleItem(1, 'Monday',    '6:00 AM to 9:00 PM'),
    new ScheduleItem(2, 'Tuesday',   '6:00 AM to 9:00 PM'),
    new ScheduleItem(3, 'Wednesday', '6:00 AM to 9:00 PM'),
    new ScheduleItem(4, 'Thursday',  '6:00 AM to 9:00 PM'),
    new ScheduleItem(5, 'Friday',    '6:00 AM to 9:00 PM'),
  ];
  currentDay: dayOfWeekNumber;

  constructor() {
    this.currentDay = <dayOfWeekNumber>(new Date()).getDay();
    for (let scheduleItem of this.schedule) {
      scheduleItem.currentDay = this.currentDay;
      scheduleItem.order = (scheduleItem.order + this.currentDay) % 7;
    }
    this.schedule.sort((a: ScheduleItem, b: ScheduleItem): number => a.order - b.order);
  }
}
