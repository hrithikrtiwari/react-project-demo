import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import { render } from "@testing-library/react";

function App() {
  // javascript me html injection...... to use js again
  //  inside html.. interpolation
  const [value, setValue] = useState("hii");
  const values = ["world", "hii", "am", "here", "hello"];
  const titles = ["hello world", "hii", "whos", "this"];
  return (
    <>
      {/* for val in values */}
      {
      values.map((val) => (
        <MyComponent title={val} value={val} />
      ))
      }
    </>
  );
}

function MyComponent({ value, title }) {
  return (
    <>
      <h1>{title}</h1>
      {/** Interpolation**/}
      <button onClick={() => null}>Increment value</button>
      {value}
      <h2>Hello second</h2>
    </>
  );
}

// function App() {
//     // function getData(){
//     //     //  axios.get("https://example.com:8000/home").then((req,res) => console.log(req);).catch();
//     // }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
