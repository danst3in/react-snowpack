import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
  //  Create the count state.
  const [count, setCount] = useState(0);
  //  Create counter (+1 each second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
//  Return the App component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo-react" className="App-logo"/>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;