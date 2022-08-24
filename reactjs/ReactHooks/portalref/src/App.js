import './App.css';
import React, { useEffect, useState, useReducer } from 'react';


function App() {



  const dataChange = () => {
    dispatch({ type: 'DATA' })
  }
  const checkChange = () => {
    dispatch({ type: 'Check' })
  }

  const reducer = ((state, action) => {
    if (action.type === 'DATA') {
      return state + 1;
    }
    if (action.type === 'Check') {
      return state * 10000;
    }
  })

  const initialState = 0;

  const [state, dispatch] = useReducer(reducer, initialState)





  return (
    <>
      {state}
      <button onClick={dataChange}>you clicked  time</button>
      <button onClick={checkChange}>you clicked  time</button>
    </>
  );
}

export default App;
