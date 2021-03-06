import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import localeJa from '@angular/common/locales/ja';

@Pipe({
  name: 'unixTimeDate'
})
export class UnixTimeDatePipe implements PipeTransform {
  private datePipe: DatePipe = new DatePipe('ja-JP');

  transform(value: any, pattern?: string): any {
    return this.datePipe.transform(new Date(value * 1000), pattern);
  }

}
