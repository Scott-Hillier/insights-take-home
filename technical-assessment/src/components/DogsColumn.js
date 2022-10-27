import React from "react";
import Dog from "./Dog";
import { Droppable } from "react-beautiful-dnd";

const DogsColumn = ({ dogs, column }) => {
  return (
    <div className="table">
      <h1>Table Header</h1>
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

export default DogsColumn;
