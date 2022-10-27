const selectDogs = (data, numberOfColumns) => {
  const dogData = {
    dogs: {},
    columns: {},
    columnOrder: ["column-1", "column-2"],
  };
  const dogs = [];
  const IDs = [];

  for (const dog in data) {
    dogs.push(dog);
  }

  const randomDogs = dogs.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  const selectedDogs = randomDogs.splice(0, 20);

  selectedDogs.map((dog, index) => {
    dogData.dogs[`dog-${index + 1}`] = { id: `dog-${index + 1}`, name: dog };
    IDs.push(`dog-${index + 1}`);
  });

  for (let i = 1; i <= numberOfColumns; i++) {
    dogData.columns[`column-${i}`] = {
      id: `column-${i}`,
      title: `Table-${i}`,
      dogIds: IDs.splice(0, 10),
    };
  }

  console.log(dogData);

  return dogData;
};
export default selectDogs;
