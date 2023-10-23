import { useSelector } from "react-redux";
import RicipeItem from "./RicipeItem";

function App() {
  const state = useSelector((state) => state.favorites);

  return (
    <>
      <div className="flex flex-col gap-4  justify-center items-center h-[100vh]">
        <h1 className="text-white">
          Favorites:{" "}
          <span className="h-[40px] w-[40px] rounded-full bg-blue">
            {state.length}
          </span>
        </h1>
        <div className="flex ">
          <RicipeItem recipe={{ id: 1, name: "Pizza" }} />
          <RicipeItem recipe={{ id: 2, name: "Lagman" }} />
          <RicipeItem recipe={{ id: 3, name: "Plov" }} />
        </div>
      </div>
    </>
  );
}

export default App;
