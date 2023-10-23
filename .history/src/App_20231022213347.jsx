import RicipeItem from "./RicipeItem";

function App() {
  return (
    <>
      <div>
        <RicipeItem  recipe={{id:1,name:"Pizza",}}/>
        <RicipeItem  recipe={{id:1,name:"Pizza",}}/>
      </div>
    </>
  );
}

export default App;
