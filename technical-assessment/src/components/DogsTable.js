import { useSelector } from "react-redux";

const DogsTable = () => {
  const allDogs = useSelector((state) => state.dogs.value);

  return (
    <div>
      {allDogs.map((dog, i) => {
        return <h3 key={i}>{dog}</h3>;
      })}
      {/* <table className="table">
        <thead></thead>
        <tbody></tbody>
      </table> */}
    </div>
  );
};

export default DogsTable;
