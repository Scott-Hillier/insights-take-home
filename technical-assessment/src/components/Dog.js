import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Dog = ({ dog, index }) => {
  return (
    <Draggable draggableId={dog.id} index={index} key={dog.id} type="TASK">
      {(provided) => {
        return (
          <section
            className="dog"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>Rank {index + 1}</div>
            <div>{dog.name}</div>
          </section>
        );
      }}
    </Draggable>
  );
};

export default Dog;
