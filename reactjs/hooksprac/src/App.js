
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState('')
  const showparaHandler = () => {
    setColor('red')
  }

  return (
    <div>

      <button style={{ color: color }} onClick={showparaHandler}>click</button>
      <button style={{ color: color }} onClick={showparaHandler}>click</button>
    </div>

  );

}

export default App;
