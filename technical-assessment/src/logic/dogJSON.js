const dogJSON = (columns, dogs) => {
  const dogJSON = {
    dogBreeds: {
      breed1Total: columns["column-1"].dogIds.length,
      breed1Rank: {},
      breed2Total: columns["column-2"].dogIds.length,
      breed2Rank: {},
    },
  };

  Object.keys(columns).forEach((key, i) => {
    columns[key].dogIds.map((dogId, index) => {
      return (dogJSON.dogBreeds[`breed${i + 1}Rank`][`rank${index + 1}`] =
        dogs[dogId].name);
    });
  });

  return dogJSON;
};

export default dogJSON;
