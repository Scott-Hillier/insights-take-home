import "./App.css";
import DogsTable from "./components/DogsTable";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDogs } from "./features/dogs";
import sortDogs from "./logic/sortDogs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      dispatch(setDogs(sortDogs(response.data.message)));
    });
  }, []);

  return (
    <div className="App">
      <h1>Insights.GG Test</h1>
      <DogsTable />
    </div>
  );
}

export default App;
