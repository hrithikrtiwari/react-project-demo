import React, {useState} from "react";

const MyOtherApp = () => {
    const [counter, setCounter] = useState(0);
    function increment() { setCounter(counter + 1)}
  return (

    <>
      <h1>New app</h1>
      {counter} <br/>
      <button 
      onClick={increment}
      >Increment</button>
    </>
  );
};
export default MyOtherApp;
