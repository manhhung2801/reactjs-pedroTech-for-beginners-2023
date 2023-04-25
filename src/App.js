import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  // vd 1
  // call api reactjs
// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
// });


  // vd 2
  // const [catFact, setCatFact] = useState("");

  // const fetchCatFact = () => {
  //     Axios.get("https://catfact.ninja/fact").then((res) => {
  //       setCatFact(res.data.fact);
  //   });
  // }
  // useEffect(() => {
  //     fetchCatFact();
  // }, []);
 
  // vd 3
  // const [name, setName] = useState("");
  // const [predictedAge, setPredicredAge] = useState(null);

  // const fetchData = () => {
  //     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //       setPredicredAge(res.data);
  //     });
  // };

  // return <div className="App">
  //        {/* vd 2 */}
  //       {/* <button onClick={fetchCatFact}> Generate Cat Fact</button>
  //       <p>{catFact}</p> */}

  //       <input placeholder="Ex. Pedro..." onChange={(event) => {
  //         setName(event.target.value)
  //         }}
  //       />
  //       <button onClick={fetchData}> Predict Age</button>
  //       <h1> Name: {predictedAge?.name} </h1>
  //       <h1> Predicted Age: {predictedAge?.age} </h1>
  //       <h1> Count: {predictedAge?.count} </h1>
  // </div>

  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
          setGeneratedExcuse(res.data[0].excuse);
      });
  };
  return (<div className="App">
        <h1>Generate An Excuse </h1>
        <button onClick={ () => fetchExcuse("party")}> Party </button>
        <button onClick={ () => fetchExcuse("family")}> Family </button>
        <button onClick={ () => fetchExcuse("office")}> Office </button>

        <p>{generatedExcuse}</p>
  </div>);
}


export default App;
