const selectDogs = (data, numberOfColumns) => {
  const dogs = [];
  const dogColumns = [];
  const selectedDogObjects = [];

  for (const dog in data) {
    dogs.push(dog);
  }

  const randomDogs = dogs.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  const selectedDogs = randomDogs.splice(0, 20);

  selectedDogs.map((dog, index) => {
    selectedDogObjects.push({ id: `dog-${index + 1}`, name: dog });
  });

  for (let i = 1; i <= numberOfColumns; i++) {
    dogColumns.push({
      id: `column-${i}`,
      dogs: selectedDogObjects.splice(0, 10),
    });
  }

  return dogColumns;
};
export default selectDogs;
