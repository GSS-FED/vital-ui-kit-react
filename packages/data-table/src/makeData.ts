import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    gender: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    address: Math.floor(Math.random() * 100),
    tags: Math.floor(Math.random() * 100),
    random:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  };
};

export default function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1]
          ? makeDataLevel(depth + 1)
          : undefined,
      };
    });
  };

  return makeDataLevel();
}
