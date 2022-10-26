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
  return dogs;
};
export default sortDogs;
