const sortDogs = (data) => {
  const dogs = [];
  for (const dog in data) {
    if (data[dog].length > 0) {
      data[dog].map((variation) => {
        dogs.push(`${variation} ${dog}`);
      });
    } else {
      dogs.push(dog);
    }
  }

  const randomDogs = dogs.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  return randomDogs;
};
export default sortDogs;
