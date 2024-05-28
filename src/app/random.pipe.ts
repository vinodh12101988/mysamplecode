import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value: any, limit : number): unknown {
    return value.substr(0,limit);
  }

}
