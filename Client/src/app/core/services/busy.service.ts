import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  bustRequesCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.bustRequesCount++;
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    })
  };

  idle() {
    this.bustRequesCount--;
    if (this.bustRequesCount <= 0) {
      this.bustRequesCount = 0;
      this.spinnerService.hide();
    }
  }
}
