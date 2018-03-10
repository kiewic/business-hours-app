import { Component } from '@angular/core';

type dayOfWeekNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface ScheduleItem {
  dayOfWeek: dayOfWeekNumber;
  day: string;
  hours: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  schedule: ScheduleItem[] = [
    { dayOfWeek: 6, day: 'Saturday', hours: '7:00 AM to 9:00 PM' },
    { dayOfWeek: 0, day: 'Sunday', hours: '7:00 AM to 9:00 PM' },
    { dayOfWeek: 1, day: 'Monday', hours: '6:00 AM to 9:00 PM' },
    { dayOfWeek: 2, day: 'Tuesday', hours: '6:00 AM to 9:00 PM' },
    { dayOfWeek: 3, day: 'Wednesday', hours: '6:00 AM to 9:00 PM' },
    { dayOfWeek: 4, day: 'Thursday', hours: '6:00 AM to 9:00 PM' },
    { dayOfWeek: 5, day: 'Friday', hours: '6:00 AM to 9:00 PM' },
  ];
  dayOfWeek: dayOfWeekNumber;

  constructor() {
    this.dayOfWeek = <dayOfWeekNumber>(new Date()).getDay();
  }
}
