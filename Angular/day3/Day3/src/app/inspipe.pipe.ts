import { Pipe, PipeTransform } from '@angular/core';
import {Instructor} from './instructor';

@Pipe({
  name: 'inspipe'
})
export class InspipePipe implements PipeTransform {

  transform(value: Instructor[], args?: string): Instructor[] {
    if(args==null)
      return value;
    args = args.toLowerCase();
    return value.filter(c => c.Name.toLowerCase().indexOf(args) >= 0 );
  }

}

export class A{

}