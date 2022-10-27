import React from "react";
import Dog from "./Dog";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ dogs, column }) => {
  return (
    <section className="table">
      <div className="header">
        <h2>Rank</h2>
        <h2>Breed</h2>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => {
          return (
            <div
              className="body"
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
    </section>
  );
};

export default Column;
