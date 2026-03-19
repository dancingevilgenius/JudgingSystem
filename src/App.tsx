import { useState } from "react";
import "./App.css";
import ContestantList from "./components/ContestantList";
import ContestantNavbar from "./components/ContestantNavbar";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ContestantNavbar />
      </div>
      <ContestantList />
    </>
  );
}
export default App;
