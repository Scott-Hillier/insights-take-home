import React from "react";
import Dog from "./Dog";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Column = ({ dogs, column, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => {
        return (
          <section
            className="table"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div className="header" {...provided.dragHandleProps}>
              <h3 className="rank">Rank</h3>
              <h3 className="breed">Breed</h3>
            </div>
            <Droppable droppableId={column.id} type="body">
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
      }}
    </Draggable>
  );
};

export default Column;
