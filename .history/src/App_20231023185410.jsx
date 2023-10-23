import RicipeItem from "./RicipeItem";

function App() {
  return (
    <>
    
      <div className="flex flex-row gap-4  justify-center items-center h-[100vh]">
        <RicipeItem recipe={{ id: 1, name: "Pizza" }} />
        <RicipeItem recipe={{ id: 2, name: "Lagman" }} />
        <RicipeItem recipe={{ id: 3, name: "Plov" }} />
      </div>
    </>
  );
}

export default App;
