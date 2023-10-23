import { useSelector } from "react-redux";
import RicipeItem from "./RicipeItem";
import { FaFaceGrinHearts } from  from "react-icons/Fa";
function App() {
  const state = useSelector((state) => state.favorites);

  return (
    <>
      <div className="flex flex-col gap-4  justify-center items-center h-[100vh]">
        <h1 className="text-white">
          <FaFaceGrinHearts /> Favorites:{state.length}
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
