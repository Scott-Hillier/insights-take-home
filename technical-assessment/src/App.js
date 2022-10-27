import "./App.css";
import Column from "./components/Column";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDogData } from "./features/dogs";
import selectDogs from "./logic/selectDogs";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      dispatch(setDogData(selectDogs(response.data.message, 2)));
    });
  }, [dispatch]);

  const dogData = useSelector((state) => state.dogs.value);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = dogData.columns[source.droppableId];
    const newDogIds = Array.from(column.dogIds);
    newDogIds.splice(source.index, 1);
    newDogIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      dogIds: newDogIds,
    };

    const newDogData = {
      ...dogData,
      columns: {
        ...dogData.columns,
        [newColumn.id]: newColumn,
      },
    };

    dispatch(setDogData(newDogData));
  };

  if (dogData.dogs) {
    return (
      <div className="App">
        <h1>Insights.GG Test</h1>
        <section className="tables">
          <DragDropContext onDragEnd={onDragEnd}>
            {dogData.columnOrder.map((columnId, index) => {
              const column = dogData.columns[columnId];
              const dogs = column.dogIds.map((dogId) => {
                return dogData.dogs[dogId];
              });
              return <Column dogs={dogs} column={column} key={column.id} />;
            })}
          </DragDropContext>
        </section>
      </div>
    );
  }
};

export default App;
