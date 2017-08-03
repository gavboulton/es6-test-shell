const fizzBuzz = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 15 === 0) {
      arr.push('fizzbuzz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else {
      arr.push(i);
    }
  }

  return arr;
};

describe('fizz buzz', () => {
  it('is a function', () => {
    expect(typeof fizzBuzz).toBe('function');
  });

  it('fizzes, buzzes and fizzbuzzes', () => {
    const mapped = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz'];
    const mappedString = '1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz';

    expect(fizzBuzz(1, 20)).toEqual(mapped);
    expect(fizzBuzz(1, 20).join(' ')).toEqual(mappedString);
  });
});
