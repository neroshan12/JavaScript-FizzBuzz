describe('FizzBuzz', function () {          // similar to RSpec 'describe' it sets up the test for the name of the function FizzBuzz

  it('prints fizz if the number is divisible by 3', function() {  // name of our first test, testing if the programme will output fizz if the number is divisible by 3
    var x = new FizzBuzz();  // creating a new FizzBuzz instance (object)
    expect(x.play(3)).toEqual('fizz');  // test to see if it works, play is a method/function that FizzBuzz has
  });


});
