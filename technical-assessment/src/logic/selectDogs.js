const selectDogs = (data, numberOfColumns) => {
  const dogs = [];
  const dogColumns = [];
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

  for (let i = 0; i < numberOfColumns; i++) {
    dogColumns.push(randomDogs.splice(0, 10));
  }

  console.log(dogColumns);

  return dogColumns;
};
export default selectDogs;
