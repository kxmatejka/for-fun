export const compose = (...functions) => initial => functions.reduce((result, fun) => fun(result), initial)
