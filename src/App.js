import {useState} from 'react';
function App() {
  
    const [count,setCount]=useState(0);
    function increment ()
    {
      setCount(count+1);
      console.log(count);
    }
  return (
    <>
      <h1>useState</h1>
      <h2>Count={count}</h2>
      <h2>Second Count={count}</h2>
      <button onClick={increment}>Increase</button>
    </>
  );
}

export default App;
