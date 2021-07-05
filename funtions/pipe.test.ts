import {pipe} from './pipe'

const addTwo = (x) => x + 2
const double = (x) => x * 2

test('pipe', () => {
  expect(pipe(addTwo, double)(8)).toEqual(18)
  expect(pipe(double, addTwo)(8)).toEqual(20)
})
