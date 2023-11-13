import { useState } from "react";
import Input from "./components/Input";
import Showdata from "./components/Showdata";

function App() {
  const [data, setdata] = useState([]);
  function storeData(val) {
    setdata((prev) => {
      return [...prev, val];
    });
  }
  return (
    <>
      <Input onSummit={storeData} />
      <Showdata data={data} />
    </>
  );
}

export default App;
