import './App.css';
import { User } from './User';
import { planets } from './planets';

function App() {
//  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lukas"];


//     return (
//       <div className="App">
//           {names.map((name, key) => {
//               return <h1 key={key}>{name}</h1>
//           })}
//       </div>
//     );
// --------------------

// const users = [
//   {name: "Pedro", age: 21},
//   {name: "Jake", age: 25},
//   {name: "Jessica", age: 45}
// ];


//     return (
//       <div className="App">
//           {users.map((user, key) => {
//               return (
//                   <div>
//                     {user.name} {user.age}
//                   </div>
//                 );
//           })}
//       </div>
//     );
// }

// --------------------
// Exercice 


// const users = [
//   {name: "Pedro", age: 21},
//   {name: "Jake", age: 25},
//   {name: "Jessica", age: 45}
// ];


//     return (
//       <div className="App">
//           {users.map((user, key) => {
//               return (
//                  <User name={user.name} age={user.age}/>
//                 );
//           })}
//       </div>
//     );


  return (  
  <div className="App">
        {planets.map( (planet, key) => planet.isGasPlanet &&
          <h1>{planet.name}</h1>
        )}
  </div>
  );
  
}


const Test = (props) => {
    return (
      <h1>
          {props.n}
          {props.isG}
      </h1>
    )
}


export default App;
