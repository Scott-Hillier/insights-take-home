import "./App.css";
import DogsColumn from "./components/DogsColumn";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDogs, getDogs } from "./features/dogs";
import selectDogs from "./logic/selectDogs";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      dispatch(setDogs(selectDogs(response.data.message, 2)));
    });
  }, []);

  const dogs = useSelector((state) => state.dogs.value);

  if (dogs.length > 0) {
    return (
      <div className="App">
        <h1>Insights.GG Test</h1>
        <DragDropContext>
          <DogsColumn />
        </DragDropContext>
      </div>
    );
  }
};

export default App;
