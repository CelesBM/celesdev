import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
    </>
  );
}

export default App;
