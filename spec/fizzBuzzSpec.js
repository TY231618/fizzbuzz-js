describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });
  describe('a number', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('a number not', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    })
  })

  describe('a number', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('a number not', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('a number', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('a number not', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(20)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Fizz" if number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
  });

  describe('when playing, says', function() {
    it('"Buzz" ifnumber is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing, says', function() {
    it('"FizzBuzz" if number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });
  });

  describe('when playing, says', function() {
    it('number if not divisible by 3, 5 or 15', function() {
      expect(fizzbuzz.says(7)).toEqual(7);
    });
  });
});
