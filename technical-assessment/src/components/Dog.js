import { Draggable } from "react-beautiful-dnd";

const Dog = ({ dog }) => {
  return (
    <Draggable>
      <div className="dog">{dog}</div>;
    </Draggable>
  );
};

export default Dog;
