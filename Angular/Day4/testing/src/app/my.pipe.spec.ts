/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MyPipe } from './my.pipe';

describe('MyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an instance', () => {
    const pipe = new MyPipe();
    expect(pipe.transform(20)).toBeGreaterThanOrEqual(3000);
  });
});
