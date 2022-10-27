import React from "react";
import Dog from "./Dog";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ dogs, column }) => {
  return (
    <div className="table">
      <header className="header">
        <h1>Rank</h1>
        <h1>Table Header</h1>
      </header>
      <Droppable droppableId={column.id}>
        {(provided) => {
          return (
            <div
              className="dog-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {dogs.map((dog, index) => {
                return <Dog dog={dog} index={index} key={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
