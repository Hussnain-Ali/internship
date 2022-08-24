import './App.css';
import { createContext, useState } from 'react';
import Child from './Child';
export const Globalinfo = createContext();

function App() {
  const [color, setColor] = useState('green')

  const getDay = (item) => {
    console.log(item)
  }
  return (
    <Globalinfo.Provider value={{ appColor: color, getDay: getDay }}>

      <div className='App'>
        <Child />
      </div>
    </Globalinfo.Provider >
  );
}

export default App;
