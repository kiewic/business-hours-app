import { Injectable } from '@angular/core';

import { dayOfWeekNumber } from './dayOfWeekNumber';

@Injectable()
export class CalendarService {

  constructor() { }

  getCurrentDay(): dayOfWeekNumber {
    return <dayOfWeekNumber>(new Date()).getDay();
  }

}
