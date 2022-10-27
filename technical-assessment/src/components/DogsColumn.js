import { Draggable } from "react-beautiful-dnd";

const DogsColumn = ({ dogs }) => {
  return (
    <div className="table">
      {dogs.map((dog) => {
        return (
          <Draggable>
            <div className="dog">{dog}</div>;
          </Draggable>
        );
      })}
    </div>
  );
};

export default DogsColumn;
