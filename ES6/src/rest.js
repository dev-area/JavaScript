import {addSimple} from './mod1';

function add(...numbers) {
  let sum=0;
  for(let i=0;i<numbers.length;i++)
    sum+=numbers[i];
  return sum;
}

console.log( addSimple(3) );
console.log( add(3, 2, 4, 5) );
