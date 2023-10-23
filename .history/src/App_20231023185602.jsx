import { useSelector } from "react-redux";
import RicipeItem from "./RicipeItem";

function App() {
  const state = useSelector((state) => state.favorites);

  return (
    <>
      <div className="flex flex-row gap-4  justify-center items-center h-[100vh]">
        <h1 className="text-white">Favorites:{state.lenght}</h1>
<div></div>
         </div>
    </>
  );
}

export default App;
