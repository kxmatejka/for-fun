import {pipe} from './pipe'

const map = (f) => (step) => (a, c) => step(a, f(c))

const filter = (p) => (step) => (a, c) => p(c) ? step(a, c) : a

const isEven = n => n % 2 === 0

const double = n => n * 2

const doubleEvens = pipe(
  filter(isEven),
  map(double),
)

const arrayConcat = (a, c) => a.concat([c])

const xform = doubleEvens(arrayConcat)

export const result = [1,2,3,4,5,6].reduce(xform, [])
