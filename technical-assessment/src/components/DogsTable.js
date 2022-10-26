import { useSelector } from "react-redux";

const DogsTable = () => {
  const allDogs = useSelector((state) => state.dogs.value);

  console.log(allDogs);

  return (
    <div>
      <table className="table">
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default DogsTable;
