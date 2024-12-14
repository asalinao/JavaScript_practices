import {PI, E} from './constants.mjs';

export function getCircleCircumference(r) {x
    return 2 * PI * r;
  }

export function getCircleArea(r){
    return PI * r ** 2
}

export function getSphereVolume(r){
    return 4/3 * (PI * r **3)
}

export function getExponentialFunction(x){
    return E ** x
}

export function getFactorial(x){
    if(x == 1 || x == 0){
        return 1
    } else {
        return x * getFactorial(x - 1)
    }
}

export function getFactorialStirling(x){
    return (2 * PI * x) ** (1/2) * x ** x * E ** (-x)
}

export function getTaylorSeries(x, term){
    let result = 1 + x;
    let n = 2;
    while (term > 2){
        result += (x ** n) / getFactorial(n);
        n += 1;
        term -= 1;
    }
    return result
}