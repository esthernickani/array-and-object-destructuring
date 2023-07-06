const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const { numbers: {a, b} } = obj;

[1, 2] = [2, 1];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
