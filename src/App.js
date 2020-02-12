import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor:'green',
    color:'aqua'
  };
  return (
    <>
              {name === '리액트' ? (
                <h1 className="react">{name} 안녕!</h1>    
              ) : (<h2>잘 작동하니</h2>)
  }
  </>
  );
}

export default App;
