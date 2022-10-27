import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Dog = ({ dog, index }) => {
  return (
    <Draggable draggableId={dog.id} index={index} type="TASK">
      {(provided) => {
        return (
          <div
            className="dog"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {dog.name}
          </div>
        );
      }}
    </Draggable>
  );
};

export default Dog;
