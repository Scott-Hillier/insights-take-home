import "./App.css";
import DogsColumn from "./components/DogsColumn";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDogColumns } from "./features/dogs";
import selectDogs from "./logic/selectDogs";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      dispatch(setDogColumns(selectDogs(response.data.message, 2)));
    });
  }, []);

  const dogColumns = useSelector((state) => state.dogs.value);

  const onDragEnd = (result) => {
    // reorder column
  };

  if (dogColumns) {
    return (
      <div className="App">
        <h1>Insights.GG Test</h1>
        <section className="tables">
          <DragDropContext onDragEnd={onDragEnd}>
            {dogColumns.map((column, index) => {
              return (
                <DogsColumn dogs={column.dogs} column={column} key={index} />
              );
            })}
          </DragDropContext>
        </section>
      </div>
    );
  }
};

export default App;
