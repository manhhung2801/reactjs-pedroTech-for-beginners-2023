import './App.css';

function App() {
 
  return (
    <div className="App">
       <User name="Pedro" age={21} email="pedro@gmail.com"/>
       <User name="Jake" age={29} email="jake@gmail.com"/>
       <User name="Jessica" age={211} email="jessica@gmail.com"/>
    </div>
  );
}

const getName = () => {
  return "Pedro";
}



const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
}

export default App;
