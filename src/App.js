import './App.css';
import { useState } from 'react';

function App() {

 // const [age, setAge] = useState(0);

  // const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event) => {
  //     setInputValue(event.target.value);
  // };

  // const [textColor, setTextColor] = useState("black");


  // return <div className="App">
  //     {/* <input type="text" onChange={handleInputChange}/>
  //     {inputValue} */}

  //     <button onClick= {() => {
  //           setTextColor(textColor === "black" ? "red" : "black");
  //           }}>Show/Hide</button>
  //         <h1 style={{color : textColor}}>HI MY NAME IS MANH HUNG</h1>
  // </div>

  // vd 4
  const [count, setCount] = useState(0);

  const increase = () => {
      setCount(count +1);
  }


  const decrease = () => {
    setCount(count - 1);
}

const setToZero = () => {
  setCount(0);
}

  return <div className="App">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={setToZero}>Set to Zero</button>
          {count}
  </div>
}


export default App;
