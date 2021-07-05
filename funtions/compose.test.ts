import {compose} from './compose'

const addTwo = (x) => x + 2
const double = (x) => x * 2

test('compose', () => {
  expect(compose(addTwo, double)(8)).toEqual(20)
  expect(compose(double, addTwo)(8)).toEqual(18)
})
