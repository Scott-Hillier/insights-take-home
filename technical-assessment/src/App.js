import "./App.css";
import DogsTable from "./components/DogsTable";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDogs, getDogs } from "./features/dogs";
import sortDogs from "./logic/sortDogs";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      dispatch(setDogs(sortDogs(response.data.message)));
    });
  }, []);

  const allDogs = useSelector((state) => state.dogs.value);

  // console.log(allDogs);
  if (allDogs.length > 0) {
    return (
      <div className="App">
        <h1>Insights.GG Test</h1>
        <DogsTable />
      </div>
    );
  }
};

export default App;
