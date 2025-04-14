import {useRef, useState} from "react";
import DisplayName from "./DisplayName.jsx";
import {ItemState} from "./store/ContextStore";

function App() {
   let [name, setName] = useState("");

   return <ItemState.Provider value={""}>
      <DisplayName/>
   </ItemState.Provider>;
}

export default App;