import Dog from "./Dog";
import { Droppable } from "react-beautiful-dnd";

const DogsColumn = ({ dogs }) => {
  return (
    <div className="table">
      <h1>Title</h1>
      <Droppable droppableId={1}>
        {(provided) => (
          <div
            className="dog-list"
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {dogs.map((dog, index) => {
              return <Dog dog={dog} key={index} />;
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DogsColumn;
