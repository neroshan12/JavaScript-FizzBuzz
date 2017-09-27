describe('FizzBuzz', function () {          // similar to RSpec 'describe' it sets up the test for the name of the function FizzBuzz

  var fizzbuzz;   //define the variable

  beforeEach(function () {   // before each 'it' test this function will run
    fizzbuzz = new FizzBuzz();  // the function that will run
  });


  it('return fizzbuzz if number divisible by 15', function () {  // name of our first test, testing if the programme will output fizz if the number is divisible by 3
    // var fizzbuzz = new FizzBuzz();  // creating a new FizzBuzz instance (object)
    expect(fizzbuzz.play(15)).toEqual('fizzbuzz');  // test to see if it works, play is a method/function that FizzBuzz has
  });

  it('return buzz if number divisible by 5', function () {  // name of our first test, testing if the programme will output fizz if the number is divisible by 3
    // var fizzbuzz = new FizzBuzz();  // creating a new FizzBuzz instance (object)
    expect(fizzbuzz.play(5)).toEqual('buzz');  // test to see if it works, play is a method/function that FizzBuzz has
  });

  it('prints fizz if the number is divisible by 3', function () {  // name of our first test, testing if the programme will output fizz if the number is divisible by 3
    // var fizzbuzz = new FizzBuzz();  // creating a new FizzBuzz instance (object)
    expect(fizzbuzz.play(3)).toEqual('fizz');  // test to see if it works, play is a method/function that FizzBuzz has
  });

  it('return number if number is not divisible by 5 or 3', function () {  // name of our first test, testing if the programme will output fizz if the number is divisible by 3
    // var fizzbuzz = new FizzBuzz();  // creating a new FizzBuzz instance (object)
    expect(fizzbuzz.play(2)).toEqual(2);  // test to see if it works, play is a method/function that FizzBuzz has
  });

});
