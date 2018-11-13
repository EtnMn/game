import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {
  private static readonly readMoreSymbol = '...';

  transform(value: string, maxLength: number): string {
    let result = value;
    if (result.length > maxLength) {
      result = result.slice(0, maxLength - ReadMorePipe.readMoreSymbol.length) + ReadMorePipe.readMoreSymbol;
    }

    return result;
  }
}
