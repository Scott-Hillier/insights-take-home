import { useSelector } from "react-redux";

const DogsTable = () => {
  const allDogs = useSelector((state) => state.dogs.value);

  return (
    <div className="table">
      {allDogs.map((dog, i) => {
        return (
          <div className="dog" key={i}>
            {dog}
          </div>
        );
      })}
      {/* <table className="table">
        <thead></thead>
        <tbody></tbody>
      </table> */}
    </div>
  );
};

export default DogsTable;
