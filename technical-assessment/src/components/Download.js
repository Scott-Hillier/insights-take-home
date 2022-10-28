import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dogJSON from "../logic/dogJSON";

const Download = () => {
  const dogData = useSelector((state) => state.dogs.value);

  const download = async (event) => {
    const data = dogJSON(dogData);

    console.log("JSON", data);

    // const filename = "DogBreeds.json";
    // const json = JSON.stringify(myData);
    // const blob = new Blob([json], { type: "application/json" });
    // const href = await URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = href;
    // link.download = filename;

    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };
  return (
    <button
      id="download"
      onClick={() => {
        download();
      }}
    >
      Download as JSON
    </button>
  );
};

export default Download;
