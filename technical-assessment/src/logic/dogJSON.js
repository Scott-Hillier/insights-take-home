import React from "react";

const dogJSON = (dogData) => {
  const dogJSON = {
    dogBreeds: {
      breed1Total: dogData.columns["column-1"].dogIds.length,
      breed1Rank: {},
      breed2Total: dogData.columns["column-2"].dogIds.length,
      breed2Rank: {},
    },
  };

  for (let i = 0; i < dogData.columns["column-1"].dogIds.length; i++) {
    dogJSON.dogBreeds.breed1Rank[`rank${i + 1}`] =
      dogData.dogs[dogData.columns["column-1"].dogIds[i]].name;
  }

  for (let i = 0; i < dogData.columns["column-2"].dogIds.length; i++) {
    dogJSON.dogBreeds.breed2Rank[`rank${i + 1}`] =
      dogData.dogs[dogData.columns["column-2"].dogIds[i]].name;
  }

  return dogJSON;
};

export default dogJSON;
