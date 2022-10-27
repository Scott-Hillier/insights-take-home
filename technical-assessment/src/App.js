import "./App.css";
import DogsColumn from "./components/DogsColumn";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDogColumns, getDogs } from "./features/dogs";
import selectDogs from "./logic/selectDogs";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      dispatch(setDogColumns(selectDogs(response.data.message, 2)));
    });
  }, []);

  const dogColumns = useSelector((state) => state.dogs.value);

  if (dogColumns) {
    return (
      <div className="App">
        <h1>Insights.GG Test</h1>
        <section className="tables">
          <DragDropContext>
            {dogColumns.map((column, index) => {
              return (
                <Droppable>
                  <DogsColumn dogs={column} key={index} />;
                </Droppable>
              );
            })}
          </DragDropContext>
        </section>
      </div>
    );
  }
};

export default App;
