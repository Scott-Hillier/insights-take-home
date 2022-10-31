import React from "react";
import { useSelector } from "react-redux";
import dogJSON from "../logic/dogJSON";

const Download = () => {
  const dogData = useSelector((state) => state.dogs.value);
  const data = dogJSON(dogData.columns, dogData.dogs);

  const download = () => {
    const filename = "DogBreeds.json";
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      id="download-button"
      onClick={() => {
        download();
      }}
    >
      Download
    </button>
  );
};

export default Download;
