import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDogData } from "./features/dogs";
import { DragDropContext } from "react-beautiful-dnd";
import selectDogs from "./logic/selectDogs";
import Column from "./components/Column";
import Download from "./components/Download";
import Alert from "./components/Alert";
import { setAlertState } from "./features/alert";

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

    if (dogData.columns[source.droppableId].dogIds.length === 1) {
      return dispatch(setAlertState({ alert: true }));
    }

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = dogData.columns[source.droppableId];
    const finish = dogData.columns[destination.droppableId];

    if (start === finish) {
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

      return;
    }

    const startTaskIds = Array.from(start.dogIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      dogIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.dogIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      dogIds: finishTaskIds,
    };

    const newState = {
      ...dogData,
      columns: {
        ...dogData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    dispatch(setDogData(newState));
  };

  if (dogData.dogs) {
    return (
      <div className="App">
        <header className="app-header">Insights.GG Assessment</header>
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
        <Alert />
        <section className="download">
          <Download>Download as JSON</Download>
        </section>
      </div>
    );
  }
};

export default App;
