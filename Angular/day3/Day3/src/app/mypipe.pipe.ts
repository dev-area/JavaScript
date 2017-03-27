import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, args: boolean, v:number): string {
    let s:string = " Hello World";
    if(args==true)
      s=s.toUpperCase();
    else
      s=s.toLowerCase();
    return value + s;
  }

}
