const fizzBuzz = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i += 1) {
    if (i.toString().match(/3/)) {
      arr.push('lucky');
    } else if (i % 15 === 0) {
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

const report = mapped => (
  mapped.reduce((memo, i) => {
    if (typeof i === 'string') {
      return { ...memo, [i]: memo[i] ? memo[i] + 1 : 1 };
    }
    return { ...memo, integer: memo.integer ? memo.integer + 1 : 1 };
  }, {})
);

describe('fizz buzz', () => {
  it('is a function', () => {
    expect(typeof fizzBuzz).toBe('function');
  });

  it('reports fizzes, buzzes, fizzbuzzes, luckies and integers', () => {
    const mapped = fizzBuzz(1, 20);

    expect(report(mapped)).toEqual({
      fizz: 4,
      buzz: 3,
      fizzbuzz: 1,
      lucky: 2,
      integer: 10,
    });
  });
});
