// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, { useState, useEffect } from "react";
import NameDisplay from "./NameDisplay";
import Axios from "axios";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Matt");
  const [nameList, setNameList] = useState([]);
  const [character, setCharacter] =useState([]);

  useEffect(() => {
    Axios.get("https://swapi.co/api/people/1")
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err));
  }, [])

  console.log(character)

  const addName = () => {
    nameList.push(name);
    setName("");
  };

  const mappedNames = nameList.map((element, i) => {
    return <p key={i}>{element}</p>;
  });

  return (
    <div>
      {mappedNames}
      <NameDisplay name={name} />
      <input onChange={e => setName(e.target.value)} />
      {count}
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <button onClick={addName}>Add to List</button>
    </div>
  );
};

export default Hooks;
