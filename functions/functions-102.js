let farenheitToCelsius = function(f){
    let c = 5 * (f - 32) / 9
    return c
}

console.log(32 + 'ºF --> ' + farenheitToCelsius(32) + 'ºC')

console.log(68 + 'ºF --> ' + farenheitToCelsius(68) + 'ºC')