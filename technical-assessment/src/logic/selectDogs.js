const selectDogs = (data, numberOfColumns) => {
  const dogs = [];
  const dogColumns = [];

  for (const dog in data) {
    dogs.push(dog);
  }

  const randomDogs = dogs.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  for (let i = 0; i < numberOfColumns; i++) {
    dogColumns.push(randomDogs.splice(0, 10));
  }

  // for (let i = 0; i < 20; i++) {
  //   if (i < 10) {
  //     dogData.dogBreeds.breed1Rank[`rank${i + 1}`] = randomDogs[i];
  //   } else {
  //     dogData.dogBreeds.breed2Rank[`rank${i - 9}`] = randomDogs[i - 10];
  //   }
  // }

  return dogColumns;
};
export default selectDogs;
