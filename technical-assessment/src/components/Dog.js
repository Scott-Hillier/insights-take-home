import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Dog = ({ dog, index }) => {
  return (
    <Draggable draggableId={dog.id} index={index} key={dog.id} type="TASK">
      {(provided) => {
        return (
          <div
            className="row"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="rank">{index + 1}</div>
            <div className="breed">{dog.name}</div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Dog;
