export const pipe = (...functions) => (initial) => functions.reduceRight((value, fun) => fun(value), initial)
