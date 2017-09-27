function FizzBuzz() {}

// FizzBuzz.prototype.play = function (number) {
//   if (number % 15 === 0) { return 'fizzbuzz'; }
//   else if (number % 5 === 0) { return 'buzz'; }
//   else if (number % 3 === 0) { return 'fizz'; }
//   else { return number; }
// }

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'fizzbuzz';
  } else if (this._isDivisbleBy(5, number)) {
    return 'buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'fizz';
  } else {
    return number;
  }
}
var fizzbuzz = new FizzBuzz();

// for (var i = 1; i <= 100; i++) {
//   console.log(fizzBuzz.play(i));
// }

FizzBuzz.prototype._isDivisbleBy = function(divisor, number) {
  return number % divisor === 0;
}
